import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist", "public");
const PORT = 4321;

// Routes to prerender. Add new pages / slugs here as the site grows.
const routes = [
  "/",
  "/about-us",
  "/testimonials",
  "/testimonials/quimicoexim-digital-transformation",
  "/testimonials/jetcoo-digital-operations-and-leads",
  "/testimonials/kbvidhyalaya-school-website",
  "/blog",
  "/blog/ai-business-automation-2024",
  "/blog/scaling-saas-architecture",
  "/blog/digital-transformation-strategy",
  "/blog/startup-mvp-development",
  "/estimator",
  "/privacy-policy",
  "/terms-of-service",
];

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("[prerender] dist/public/index.html not found. Run `vite build` first.");
    process.exit(0); // never break the deploy
  }

  // Keep the original shell in memory so overwriting route files
  // on disk never poisons the SPA fallback for other routes.
  const shell = await readFile(join(DIST, "index.html"), "utf-8");

  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const ext = extname(urlPath);

      if (ext) {
        const filePath = join(DIST, urlPath);
        if (existsSync(filePath) && (await stat(filePath)).isFile()) {
          const body = await readFile(filePath);
          res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
          res.end(body);
          return;
        }
        res.writeHead(404);
        res.end("not found");
        return;
      }

      // No extension -> SPA route, serve the in-memory shell.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(shell);
    } catch {
      res.writeHead(500);
      res.end("error");
    }
  });

  await new Promise((r) => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });
      // Wait until React has painted something into #root.
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.children.length > 0;
        },
        { timeout: 15000 }
      );

      const html = "<!DOCTYPE html>\n" + (await page.content()).replace(/^<!DOCTYPE html>/i, "");

      const outPath =
        route === "/"
          ? join(DIST, "index.html")
          : join(DIST, route, "index.html");
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`[prerender] ✓ ${route}`);
      ok++;
    } catch (err) {
      console.warn(`[prerender] ✗ ${route} — ${err.message} (kept SPA fallback)`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] done — ${ok}/${routes.length} routes prerendered.`);
}

main().catch((err) => {
  // Never fail the build because of prerendering.
  console.error("[prerender] fatal:", err.message);
  process.exit(0);
});
