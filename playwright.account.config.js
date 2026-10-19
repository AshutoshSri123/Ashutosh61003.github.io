import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/accounts", workers: 1,
  use: { baseURL: "http://127.0.0.1:5178", browserName: "chromium", headless: true, viewport: { width: 390, height: 844 } },
  webServer: {
    command: "VITE_PERSONAL_EMULATOR=true VITE_FIREBASE_PROJECT_ID=demo-personal npm run dev -- --host 127.0.0.1 --port 5178 --strictPort",
    url: "http://127.0.0.1:5178", reuseExistingServer: false,
  },
});
