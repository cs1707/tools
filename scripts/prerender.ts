import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { preview } from "vite";
import { tools } from "../src/constant/page-info.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

(async () => {
  const previewServer = await preview({
    // any valid user config options, plus `mode` and `configFile`
    preview: {
      port: 7080,
    },
  });

  previewServer.printUrls();

  const pathnames = tools
    .map((item) => (item.path.startsWith("/") ? item.path : `/${item.path}`))
    .concat(["/"]);

  const browser = await puppeteer.launch({
    headless: "new",
  });
  for (const pathname of pathnames) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:7080${pathname}`, {
      waitUntil: "networkidle0",
    });

    const html = await page.content();
    const filePath = path.join("../dist", pathname, "index.html");
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true });
    fs.writeFileSync(toAbsolute(filePath), html);
  }

  await browser.close();

  console.log("prerender done");
  process.exit(0);
})();
