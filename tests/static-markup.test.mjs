import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const [indexHtml, reportHtml, styles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../report.html", import.meta.url), "utf8"),
  readFile(new URL("../styles.css", import.meta.url), "utf8")
]);

test("homepage markup exposes skip link, labeled search, and grouped list target", () => {
  assert.match(indexHtml, /<a class="skip-link" href="#main">跳到比赛列表<\/a>/);
  assert.match(indexHtml, /<main id="main" class="wrap page-main">/);
  assert.match(indexHtml, /<label class="search-label" for="search">搜索比赛<\/label>/);
  assert.match(indexHtml, /<section id="cards" class="groups" aria-live="polite"><\/section>/);
});

test("report markup exposes summary, version timeline, and table of contents", () => {
  assert.match(reportHtml, /<a class="skip-link" href="#report">跳到报告正文<\/a>/);
  assert.match(reportHtml, /<div id="match-summary" class="match-summary" aria-live="polite"><\/div>/);
  assert.match(reportHtml, /<ol id="versions" class="versions"><\/ol>/);
  assert.match(reportHtml, /<nav id="toc" class="toc" aria-label="报告目录"><\/nav>/);
});

test("styles include focus, reduced motion, safe-area, and mobile rules", () => {
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /env\(safe-area-inset-bottom\)/);
  assert.match(styles, /@media \(max-width: 680px\)/);
  assert.doesNotMatch(styles, /transition:\s*all\b/);
});
