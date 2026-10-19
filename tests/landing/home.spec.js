import { test, expect } from "@playwright/test";
for (const [width, height] of [
  [1440, 900],
  [390, 844],
  [320, 568],
  [844, 390],
]) {
  test(`minimal homepage fits ${width}×${height} without scrolling`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Ashutosh Srivastava" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })).toBeVisible();
    await page.mouse.wheel(0, 900);
    expect(
      await page.evaluate(() => ({
        height: document.documentElement.scrollHeight,
        width: document.documentElement.scrollWidth,
        scroll: scrollY,
        body: document.body.scrollTop,
      })),
    ).toEqual({ height, width, scroll: 0, body: 0 });
    await expect(page.locator(".landing-portrait")).toHaveCSS(
      "border-radius",
      "50%",
    );
    expect(errors).toEqual([]);
  });
}
test("theme transitions together and both new portraits remain preloaded", async ({
  page,
}) => {
  await page.goto("/");
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".landing-portrait img")].every(
      (i) => i.complete && i.naturalWidth,
    ),
  );
  await expect(page.locator(".landing-portrait-light")).toHaveAttribute("src", "/images/ashutosh-diptych-light.webp");
  expect(await page.locator("body").evaluate(el => getComputedStyle(el).transitionDuration)).toContain("0.48s");
  expect(await page.locator(".landing-portrait-dark").evaluate(el => getComputedStyle(el).transitionDuration)).toBe("0.48s");
  const images = [];
  page.on("request", (r) => {
    if (r.resourceType() === "image") images.push(r.url());
  });
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(4, 4, 4)",
  );
  await expect(page.locator(".landing-portrait-dark")).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(page.locator(".landing-portrait-dark")).toHaveAttribute(
    "src",
    "/images/ashutosh-diptych-dark.webp",
  );
  expect(images).toEqual([]);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(252, 252, 252)",
  );
});
test("the name opens the blue portfolio and its existing links work", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })
    .click();
  await expect(page).toHaveURL(/\/portfolio$/);
  await expect(
    page.getByRole("heading", {
      name: "I turn messy product ideas into shipped systems.",
    }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/portfolio-mode/);
  expect(
    await page
      .locator("h1")
      .first()
      .evaluate((el) => getComputedStyle(el).color),
  ).toBe("rgb(6, 31, 111)");
  await page.goto("/portfolio/work");
  await expect(page.locator(".work-page")).toBeVisible();
  await page.goto("/portfolio/projects");
  await expect(page.locator(".projects-page")).toBeVisible();
  await page.goto("/portfolio/contact");
  await expect(page.locator(".contact-page")).toBeVisible();
});
test("retired personal pages return to the minimal homepage", async ({
  page,
}) => {
  for (const route of [
    "/about",
    "/opinions",
    "/beliefs",
    "/story",
    "/connect",
    "/messages",
    "/spaces",
    "/admin",
    "/opinions/old-entry",
  ]) {
    await page.goto(route);
    await expect(page).toHaveURL("http://127.0.0.1:5177/");
    await expect(page.getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })).toBeVisible();
  }
});

test("mobile intro and page menu fit and support closing and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".landing-intro")).toBeVisible();
  const portrait = await page.locator(".landing-portrait").boundingBox();
  const intro = await page.locator(".landing-intro").boundingBox();
  const dock = await page.locator(".mobile-dock").boundingBox();
  expect(portrait.y).toBeLessThan(160);
  expect(intro.y + intro.height).toBeLessThan(dock.y);
  await page.getByRole("button", { name: "Open page menu" }).click();
  await expect(page.getByRole("navigation", { name: "All pages" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Close page menu", exact: true }).last()).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open page menu" })).toBeFocused();
  await page.getByRole("button", { name: "Open page menu" }).click();
  await page.getByRole("navigation", { name: "All pages" }).getByRole("link", { name: "Portfolio", exact: true }).click();
  await expect(page).toHaveURL(/\/portfolio$/);
});

test("mobile header clock ticks and the full-width menu wraps the toggle", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  const clock = page.locator(".landing-clock");
  await expect(clock).toHaveText(/\d{2}:\d{2}:\d{2}/);
  const initial = await clock.textContent();
  await expect(clock).not.toHaveText(initial);
  await expect(page.locator(".landing-date")).toHaveText(/\d{1,2}(st|nd|rd|th) [A-Z][a-z]+ \d{4}/);
  const intro = await page.locator(".landing-intro").boundingBox();
  const dock = await page.locator(".mobile-dock").boundingBox();
  expect(intro.y + intro.height).toBeLessThan(dock.y);
  await page.getByRole("button", { name: "Open page menu" }).click();
  await expect.poll(async () => Math.round((await page.locator(".mobile-menu").boundingBox()).width)).toBe(335);
  await expect(page.locator(".mobile-menu-surface path")).toBeVisible();
});

test("personal destinations stay empty and only the second shortcut opens the blue portfolio", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const dock = page.getByRole("navigation", { name: "Main navigation" });
  await expect(dock.getByRole("link").nth(1)).toHaveAttribute("href", "/portfolio");
  await dock.getByRole("link", { name: "Thoughts", exact: true }).click();
  await expect(page).toHaveURL(/\/thoughts$/);
  await expect(page.locator(".landing-content")).toHaveCount(0);
  await expect(page.locator(".landing-date")).toBeVisible();
  for (const route of ["/work", "/projects", "/identity", "/blogs", "/photography", "/dreams"]) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(route + "$"));
    await expect(page.locator(".landing-content")).toHaveCount(0);
    await expect(page.locator(".mobile-dock")).toBeVisible();
  }
});
test("holding the dock reveals labels, and holding and sliding the plus selects a page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const dock = page.locator(".mobile-dock");
  const home = await dock.getByRole("link", { name: "Home", exact: true }).boundingBox();
  await page.mouse.move(home.x + home.width / 2, home.y + home.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(700);
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-pressed/);
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-pressed/);
  await expect(dock.locator(".dock-label").first()).toHaveCSS("opacity", "1");
  await page.mouse.up();
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-pressed/);
  const plus = await page.getByRole("button", { name: "Open page menu" }).boundingBox();
  await page.mouse.move(plus.x + plus.width / 2, plus.y + plus.height / 2);
  await page.mouse.down();
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-expanded/);
  await page.mouse.move(plus.x + plus.width / 2, plus.y + plus.height / 2 - 16, { steps: 5 });
  await expect(page.locator(".gesture-selected")).toHaveText("Home");
  await page.mouse.move(plus.x + plus.width / 2 + 32, plus.y + plus.height / 2 - 16);
  await expect(page.locator(".gesture-selected")).toHaveText("Work");
  await page.mouse.up();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-expanded/);
});

test("one-second hold grows the circle and steers within all grid boundaries", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator(".mobile-menu-toggle");
  const plus = await toggle.boundingBox();
  let x = plus.x + plus.width / 2, y = plus.y + plus.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.waitForTimeout(500);
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-steering/);
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-steering/);
  await expect(toggle).toHaveCSS("transform", "matrix(1.4, 0, 0, 1.4, 0, 0)");
  await expect(toggle.locator("svg")).toHaveCSS("opacity", "0");

  const move = async (dx, dy, label) => {
    x += dx; y += dy;
    await page.mouse.move(x, y);
    await expect(page.locator(".gesture-selected")).toHaveText(label);
  };
  await move(-32, 0, "Home"); // Left edge cannot wrap to another row.
  await move(16, 0, "Portfolio");
  await move(32, 0, "Projects");
  await move(32, 0, "Projects");
  await move(-16, 0, "Work"); // Immediate reversal at the right edge.
  await move(0, 16, "Blogs");
  await move(0, 16, "Login"); // The last row has three cells.
  await move(16, 0, "Login");
  await move(0, 16, "Login");
  await move(-32, 0, "Contact");
  await move(0, -16, "Identity");
  await move(0, -16, "Home");
  await move(0, -16, "Home");
  await move(16, 16, "Thoughts"); // Diagonal movement follows both axes.
  await page.mouse.up();
  await expect(page).toHaveURL(/\/thoughts$/);
  await expect(toggle.locator("svg")).toHaveCSS("opacity", "1");
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-steering/);
});

test("releasing without steering and cancellation restore the held button", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator(".mobile-menu-toggle");
  const box = await toggle.boundingBox();
  await page.mouse.move(box.x + 29, box.y + 29);
  await page.mouse.down();
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-steering/);
  await page.mouse.up();
  await expect(page).toHaveURL("http://127.0.0.1:5177/");
  await expect(toggle.locator("svg")).toHaveCSS("opacity", "1");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.mouse.down();
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-steering/);
  await toggle.dispatchEvent("pointercancel", { pointerId: 1 });
  await page.mouse.up();
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-steering/);
  await expect(toggle.locator("svg")).toHaveCSS("opacity", "1");
  await expect(page).toHaveURL("http://127.0.0.1:5177/");
});
test("quick dock taps never leave delayed expansion and repeated menu closing clears its surface", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const intro = page.locator(".landing-intro");
  await expect(intro).not.toContainText("🌱");
  await expect(intro).toHaveCSS("font-weight", "400");
  await expect(intro.locator("strong")).toHaveText("Ashutosh");
  const home = await page.locator(".mobile-dock a").first().boundingBox();
  await page.mouse.move(home.x + 20, home.y + 20);
  await page.mouse.down();
  await page.waitForTimeout(100);
  await page.mouse.up();
  await page.waitForTimeout(1100);
  await expect(page.locator(".mobile-navigation")).not.toHaveClass(/is-pressed/);
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: "Open page menu" }).click();
    await page.getByRole("button", { name: "Close page menu", exact: true }).last().click();
  }
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator(".mobile-menu")).toHaveCSS("visibility", "hidden");
  await expect(page.locator(".mobile-menu")).toHaveCSS("opacity", "0");
  await expect(page.locator(".mobile-dock")).toHaveCSS("height", "58px");
  await expect(page.locator(".dock-label").first()).toHaveCSS("opacity", "0");
});

for (const theme of ["light", "dark"]) {
  test(`steering highlight is brighter in ${theme} mode`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    if (theme === "dark") await page.getByRole("button", { name: "Switch to dark mode" }).click();
    const toggle = page.locator(".mobile-menu-toggle");
    const box = await toggle.boundingBox();
    await page.mouse.move(box.x + 29, box.y + 29);
    await page.mouse.down();
    await expect(page.locator(".mobile-navigation")).toHaveClass(/is-steering/);
    await expect.poll(() => page.evaluate(() => {
      const context = document.createElement("canvas").getContext("2d");
      const brightness = (selector) => {
        context.fillStyle = getComputedStyle(document.querySelector(selector)).backgroundColor;
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data[0];
      };
      return brightness(".gesture-selected > span") - brightness(".mobile-menu-grid a:not(.gesture-selected) > span");
    })).toBeGreaterThan(10);
    await page.mouse.up();
  });
}

test("navigation pulses for touch, hold, each new selection and release", async ({ page }) => {
  await page.addInitScript(() => {
    window.hapticCalls = [];
    Object.defineProperty(navigator, "vibrate", { configurable: true, value: (pattern) => {
      window.hapticCalls.push(pattern);
      return true;
    } });
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator(".mobile-menu-toggle");
  const box = await toggle.boundingBox();
  const x = box.x + 29, y = box.y + 29;
  await page.mouse.move(x, y);
  await page.mouse.down();
  expect(await page.evaluate(() => window.hapticCalls)).toEqual([[8, 20, 12]]);
  await expect(page.locator(".mobile-navigation")).toHaveClass(/is-steering/);
  expect(await page.evaluate(() => window.hapticCalls)).toEqual([[8, 20, 12], [14, 24, 20]]);
  await page.mouse.move(x + 16, y);
  await expect(page.locator(".gesture-selected")).toHaveText("Portfolio");
  await page.mouse.move(x + 32, y);
  await expect(page.locator(".gesture-selected")).toHaveText("Work");
  await page.mouse.move(x + 32, y - 16); // Clamped edge does not pulse.
  expect(await page.evaluate(() => window.hapticCalls)).toEqual([[8, 20, 12], [14, 24, 20], 10, 10]);
  await page.mouse.move(x + 16, y - 16);
  await expect(page.locator(".gesture-selected")).toHaveText("Portfolio");
  await page.mouse.move(x, y - 16);
  await expect(page.locator(".gesture-selected")).toHaveText("Home");
  await page.mouse.up();
  expect(await page.evaluate(() => window.hapticCalls.at(-1))).toBe(12);
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Home", exact: true }).click();
  expect(await page.evaluate(() => window.hapticCalls.at(-1))).toBe(8);
});

for (const mode of ["missing", "throws"]) {
  test(`navigation works when vibration ${mode}`, async ({ page }) => {
    await page.addInitScript((mode) => {
      Object.defineProperty(navigator, "vibrate", { configurable: true, value: mode === "missing" ? undefined : () => { throw new Error("Unavailable"); } });
    }, mode);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open page menu" }).click();
    await page.getByRole("navigation", { name: "All pages" }).getByRole("link", { name: "Thoughts", exact: true }).click();
    await expect(page).toHaveURL(/\/thoughts$/);
  });
}
