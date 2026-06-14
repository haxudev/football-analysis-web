import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";

const appSource = await readFile(new URL("../app.js", import.meta.url), "utf8");

function createElement(id) {
  const listeners = new Map();
  return {
    id,
    value: "",
    hidden: false,
    textContent: "",
    innerHTML: "",
    style: {},
    classList: {
      add() {},
      remove() {}
    },
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    dispatch(type, event = {}) {
      const listener = listeners.get(type);
      if (listener) listener(event);
    },
    querySelectorAll(selector) {
      if (selector === "h2, h3") return parseHeadings(this.innerHTML);
      if (selector === "button") return [];
      return [];
    }
  };
}

function parseHeadings(html) {
  const headings = [];
  const re = /<(h[23])[^>]*>(.*?)<\/\1>/gis;
  let match;
  while ((match = re.exec(html))) {
    headings.push({
      tagName: match[1].toUpperCase(),
      textContent: match[2].replace(/<[^>]+>/g, ""),
      id: "",
      style: {}
    });
  }
  return headings;
}

function createDocument(elements) {
  let domContentLoaded;
  return {
    title: "",
    getElementById(id) {
      return elements[id] || null;
    },
    addEventListener(type, listener) {
      if (type === "DOMContentLoaded") domContentLoaded = listener;
    },
    runDOMContentLoaded() {
      assert.ok(domContentLoaded, "DOMContentLoaded listener was registered");
      domContentLoaded();
    }
  };
}

function markdownToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\n{2,}/g, "\n")
    .split("\n")
    .map((line) => (line.startsWith("<h") ? line : `<p>${line}</p>`))
    .join("");
}

async function runApp({ elements, reports, markdownByPath = {}, search = "", pathname = "/index.html" }) {
  const document = createDocument(elements);
  const context = {
    console,
    Date,
    Intl,
    Number,
    String,
    URLSearchParams,
    encodeURIComponent,
    fetch(url) {
      const path = String(url).replace(/^data\//, "");
      if (path === "reports.json") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ generatedAt: "2026-06-13T16:04:08.121Z", reports })
        });
      }
      return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(markdownByPath[path] || "")
      });
    },
    document,
    location: { pathname, search },
    history: {
      replaceState(_state, _title, url) {
        context.replacedUrl = url;
        context.location.search = url.includes("?") ? `?${url.split("?")[1]}` : "";
      }
    },
    marked: { parse: markdownToHtml },
    replacedUrl: undefined
  };
  context.window = context;

  vm.runInNewContext(appSource, context, { filename: "app.js" });
  document.runDOMContentLoaded();
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
  await new Promise((resolve) => setImmediate(resolve));
  await Promise.resolve();
  return context;
}

test("homepage groups matches by Asia/Shanghai kickoff date and sorts within each group", async () => {
  const elements = {
    cards: createElement("cards"),
    search: createElement("search"),
    empty: createElement("empty"),
    meta: createElement("meta"),
    generated: createElement("generated")
  };

  await runApp({
    elements,
    reports: [
      {
        matchId: "late",
        home: "德国",
        away: "库拉索",
        competition: "世界杯",
        kickoff: "2026-06-14T17:00:00Z",
        probs: { home: 0.908, draw: 0.063, away: 0.029 },
        validationPass: true,
        generatedAt: "2026-06-13T15:51:05.839Z"
      },
      {
        matchId: "soon",
        home: "荷兰",
        away: "日本",
        competition: "世界杯",
        kickoff: "2026-06-14T12:00:00Z",
        probs: { home: 0.45, draw: 0.28, away: 0.27 },
        validationPass: true,
        generatedAt: "2026-06-13T15:51:05.839Z"
      },
      {
        matchId: "unscheduled",
        home: "待定主队",
        away: "待定客队",
        competition: "友谊赛",
        probs: null,
        validationPass: false
      }
    ]
  });

  const html = elements.cards.innerHTML;
  assert.match(html, /class="date-group"/);
  assert.ok(html.indexOf("20:00") < html.indexOf("01:00"), "same-day matches are sorted by local kickoff time");
  assert.ok(html.indexOf("01:00") < html.indexOf("时间待定"), "unscheduled matches render last");
  assert.equal(elements.meta.textContent, "显示 3 / 共 3 场");
});

test("homepage search keeps date grouping and syncs the query into the URL", async () => {
  const elements = {
    cards: createElement("cards"),
    search: createElement("search"),
    empty: createElement("empty"),
    meta: createElement("meta"),
    generated: createElement("generated")
  };

  const context = await runApp({
    elements,
    reports: [
      {
        matchId: "m1",
        home: "德国",
        away: "库拉索",
        competition: "世界杯",
        kickoff: "2026-06-14T17:00:00Z",
        probs: { home: 0.91, draw: 0.06, away: 0.03 },
        validationPass: true
      },
      {
        matchId: "m2",
        home: "荷兰",
        away: "日本",
        competition: "世界杯",
        kickoff: "2026-06-14T20:00:00Z",
        probs: { home: 0.45, draw: 0.28, away: 0.27 },
        validationPass: true
      }
    ],
    pathname: "/index.html"
  });

  elements.search.value = "德国";
  elements.search.dispatch("input");

  assert.match(elements.cards.innerHTML, /class="date-group"/);
  assert.match(elements.cards.innerHTML, /德国/);
  assert.doesNotMatch(elements.cards.innerHTML, /荷兰/);
  assert.equal(elements.meta.textContent, "显示 1 / 共 2 场");
  assert.equal(context.replacedUrl, "/index.html?q=%E5%BE%B7%E5%9B%BD");
});

test("report page renders match summary and table of contents from markdown headings", async () => {
  const elements = {
    report: createElement("report"),
    title: createElement("title"),
    subtitle: createElement("subtitle"),
    versions: createElement("versions"),
    "match-summary": createElement("match-summary"),
    toc: createElement("toc")
  };

  await runApp({
    elements,
    pathname: "/report.html",
    search: "?id=m1",
    reports: [
      {
        matchId: "m1",
        title: "荷兰 vs 日本",
        home: "荷兰",
        away: "日本",
        competition: "世界杯",
        kickoff: "2026-06-14T20:00:00Z",
        probs: { home: 0.45, draw: 0.28, away: 0.27 },
        generatedAt: "2026-06-13T15:51:05.839Z",
        validationPass: true,
        current: "reports/m1/current.md",
        history: []
      }
    ],
    markdownByPath: {
      "reports/m1/current.md": "# 荷兰 vs 日本\n\n## 核心判断\n\n正文\n\n### 赔率变化\n\n正文"
    }
  });

  assert.match(elements["match-summary"].innerHTML, /荷兰 vs 日本/);
  assert.match(elements["match-summary"].innerHTML, /45%/);
  assert.match(elements.report.innerHTML, /核心判断/);
  assert.match(elements.toc.innerHTML, /核心判断/);
  assert.match(elements.toc.innerHTML, /赔率变化/);
});
