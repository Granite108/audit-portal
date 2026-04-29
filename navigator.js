const { chromium } = require('playwright');
(async () => {
  console.log("[NAVIGATOR]: IGNITING_EYES...");
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://granite108.github.io/audit-portal/');
    const title = await page.title();
    console.log(`[NAVIGATOR]: REACHED_TARGET: ${title}`);
    await browser.close();
    console.log("[NAVIGATOR]: MISSION_COMPLETE.");
  } catch (err) {
    console.log("[NAVIGATOR]: OPTIC_NERVE_FAILURE: " + err.message);
  }
})();
