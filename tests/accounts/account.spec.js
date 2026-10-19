import { test, expect } from "@playwright/test";
test.beforeAll(async () => {
  await fetch("http://127.0.0.1:8080/emulator/v1/projects/demo-personal/databases/(default)/documents", { method: "DELETE" });
});
async function login(page, email, name) {
  await page.goto("/login");
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Google" }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState("load");
  await popup.getByText("Add new account").click();
  await popup.getByLabel("Email", { exact: true }).fill(email);
  await popup.getByLabel("Display name", { exact: true }).fill(name);
  await popup.getByRole("button", { name: "Sign in with Google.com", exact: true }).click();
  await expect(page.getByText(email, { exact: true })).toBeVisible();
}
test("login is the eleventh menu option and visitors can sign in", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open page menu" }).click();
  const menu = page.getByRole("navigation", { name: "All pages" });
  await expect(menu.getByRole("link")).toHaveCount(11);
  await expect(menu.getByRole("link").nth(9)).toHaveText("Dreams");
  await menu.getByRole("link").nth(10).click();
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole("button", { name: "Continue with Google" })).toBeVisible();
  await page.goto("/login/");
  await expect(page.getByRole("button", { name: "Continue with Google" })).toBeVisible();
});
test("reader gets view access, persistent sign-in, and logout", async ({ page }) => {
  await login(page, "reader-login@example.test", "Reader");
  await expect(page.getByText(/View access/)).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Edit pages" })).toHaveCount(0);
  await page.reload();
  await expect(page.getByText("reader-login@example.test", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Log out" }).click();
  await expect(page.getByRole("button", { name: "Continue with Google" })).toBeVisible();
});
test("admin publishes a personal page that a visitor can view", async ({ page, browser }) => {
  await login(page, "ashu.61003@gmail.com", "Ashutosh");
  await expect(page.getByText(/Administrator/)).toBeVisible();
  await page.getByRole("link", { name: "Edit Work", exact: true }).click();
  await page.getByLabel("Page title").fill("My work");
  await page.getByLabel("Page content (Markdown)").fill("Product systems, thoughtfully built.");
  await page.getByRole("button", { name: "Publish page" }).click();
  await expect(page.getByText("Page published.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "My work", exact: true })).toBeVisible();
  const visitor = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await visitor.goto("http://127.0.0.1:5178/work");
  await expect(visitor.getByRole("heading", { name: "My work", exact: true })).toBeVisible();
  await expect(visitor.getByText("Product systems, thoughtfully built.")).toBeVisible();
  await expect(visitor.getByRole("button", { name: "Edit page" })).toHaveCount(0);
  await visitor.close();
});
test("private DM delivers to admin and reply arrives live", async ({ page, browser }) => {
  await login(page, "dm-reader@example.test", "DM Reader");
  await page.goto("/contact");
  await page.getByLabel("Your message").fill("Hello Ashutosh, a private question.");
  await page.getByRole("button", { name: "Send", exact: true }).click();
  await expect(page.getByText("Hello Ashutosh, a private question.", { exact: true })).toBeVisible();
  const admin = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await login(admin, "ashu.61003@gmail.com", "Ashutosh");
  await admin.goto("/contact");
  await admin.getByRole("button", { name: /DM Reader/ }).click();
  await expect(admin.getByText("Hello Ashutosh, a private question.", { exact: true }).last()).toBeVisible();
  await admin.getByLabel("Your message").fill("Hello! Thanks for reaching out.");
  await admin.getByRole("button", { name: "Send", exact: true }).click();
  await expect(admin.getByLabel("Your message")).toHaveValue("", { timeout: 15000 });
  await expect(admin.getByText("Hello! Thanks for reaching out.", { exact: true }).last()).toBeVisible();
  await expect(page.getByText("Hello! Thanks for reaching out.", { exact: true })).toBeVisible({ timeout: 15000 });
  await admin.close();
});

test("an older admin draft cannot overwrite a page published in another tab", async ({ page, browser }) => {
  await login(page, "ashu.61003@gmail.com", "Ashutosh");
  await page.goto("/work?edit=1");
  await page.getByLabel("Page content (Markdown)").fill("First tab publication.");
  const other = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await login(other, "ashu.61003@gmail.com", "Ashutosh");
  await other.goto("/work?edit=1");
  await other.getByLabel("Page content (Markdown)").fill("Keep this unsaved draft.");
  await page.getByRole("button", { name: "Publish page" }).click();
  await expect(page.getByText("Page published.")).toBeVisible();
  await other.getByRole("button", { name: "Publish page" }).click();
  await expect(other.getByRole("alert")).toContainText("changed elsewhere");
  await expect(other.getByLabel("Page content (Markdown)")).toHaveValue("Keep this unsaved draft.");
  await other.close();
});

test("admin can edit and publish a timeline chapter for visitors", async ({ page, browser }) => {
  await login(page, "ashu.61003@gmail.com", "Ashutosh");
  await page.getByRole("link", { name: "Edit Timeline", exact: true }).click();
  await expect(page.getByLabel("Timeline heading")).toHaveValue("A life, so far.");
  await page.getByRole("group", { name: "Chapter 11", exact: true }).getByLabel("Details").fill("Started a new chapter at Flurn in Bangalore.");
  await page.getByRole("button", { name: "Publish timeline", exact: true }).click();
  await expect(page.getByText("Timeline published.")).toBeVisible();
  const visitor = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await visitor.goto("http://127.0.0.1:5178/timeline/");
  const scroller = visitor.locator(".life-scroll");
  await scroller.evaluate(el => { el.scrollTop = el.scrollHeight; });
  await expect(visitor.locator(".life-event[aria-current]")).toContainText("Started a new chapter at Flurn in Bangalore.");
  await expect(visitor.getByRole("button", { name: "Edit timeline", exact: true })).toHaveCount(0);
  await visitor.close();
});
