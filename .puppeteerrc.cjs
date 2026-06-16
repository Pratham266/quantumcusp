const { join } = require("path");

/**
 * Store Chromium inside the project so Vercel's build container
 * finds it reliably at build time (default ~/.cache path is not persisted).
 */
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
