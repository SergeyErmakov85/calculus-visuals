// ─────────────────────────────────────────────────────────────────────────────
// generate-sitemap.ts — генерирует public/sitemap.xml и public/robots.txt из
// единого topicMap. Запуск: `npm run sitemap` (также авто-перед build).
// База URL берётся из env SITE_URL, иначе — продакшен-домен по умолчанию.
// ─────────────────────────────────────────────────────────────────────────────
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { TOPIC_MAP, topicHref } from "../src/content/topicMap";
import { SUBSECTIONS } from "../src/content/subsections";

const SITE_URL = (process.env.SITE_URL ?? "https://calculus-visuals.vercel.app").replace(/\/$/, "");

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");

// Собираем уникальные пути: главная + хабы разделов + готовые темы + подразделы.
const paths = new Set<string>(["/"]);
for (const section of TOPIC_MAP) {
  paths.add(section.slug);
  for (const topic of section.topics) {
    if (topic.status === "ready") paths.add(topicHref(topic));
  }
}
for (const [topicKey, subs] of Object.entries(SUBSECTIONS)) {
  for (const s of subs) paths.add(`/${topicKey}/${s.slug}`);
}

const today = new Date().toISOString().slice(0, 10);

const urls = [...paths]
  .map((p) => {
    const loc = `${SITE_URL}${p}`;
    const priority = p === "/" ? "1.0" : p.split("/").length <= 2 ? "0.8" : "0.6";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(publicDir, "robots.txt"), robots, "utf8");

console.log(`sitemap.xml: ${paths.size} URL · robots.txt → ${SITE_URL}`);
