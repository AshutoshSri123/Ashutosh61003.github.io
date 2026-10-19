import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { siteRoutes } from "./routes.mjs";
const output =
  process.env.SITE_BUILD_DIR || process.env.DREAMS_BUILD_DIR || "dist";
await build({ build: { outDir: resolve(output) } });
const html = await readFile(resolve(output, "index.html"), "utf8");
await writeFile(resolve(output, "404.html"), html);
for (const route of siteRoutes) {
  await mkdir(resolve(output, route), { recursive: true });
  await writeFile(resolve(output, route, "index.html"), html);
}

// Firebase web configuration is public at runtime; keep key values out of Git assets.
if (process.env.VITE_FIREBASE_API_KEY) {
  await writeFile(resolve(output, "firebase-public-config.json"), JSON.stringify({ apiKey: process.env.VITE_FIREBASE_API_KEY }));
} else {
  try {
    const env = await readFile(resolve(".env"), "utf8");
    const key = env.match(/^VITE_FIREBASE_API_KEY=(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
    if (key) await writeFile(resolve(output, "firebase-public-config.json"), JSON.stringify({ apiKey: key }));
  } catch { /* CI supplies configuration through the environment. */ }
}
