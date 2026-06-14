/* AI 球赛观察 — static site logic (index list + report detail). */
(function () {
  "use strict";

  var DATA_BASE = "data/";
  var DISPLAY_TIME_ZONE = "Asia/Shanghai";

  var dateKeyFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: DISPLAY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  var dateLabelFormatter = new Intl.DateTimeFormat("zh-CN", {
    timeZone: DISPLAY_TIME_ZONE,
    weekday: "short",
    month: "long",
    day: "numeric"
  });

  var timeFormatter = new Intl.DateTimeFormat("zh-CN", {
    timeZone: DISPLAY_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  var dateTimeFormatter = new Intl.DateTimeFormat("zh-CN", {
    timeZone: DISPLAY_TIME_ZONE,
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  var percentFormatter = new Intl.NumberFormat("zh-CN", {
    style: "percent",
    maximumFractionDigits: 0
  });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function pctWidth(n) {
    return Math.max(0, Math.min(100, Math.round((Number(n) || 0) * 100)));
  }

  function pctLabel(n) {
    return percentFormatter.format(Number(n) || 0);
  }

  function kickoffDate(rep) {
    var d = rep && rep.kickoff ? new Date(rep.kickoff) : null;
    return d && !Number.isNaN(d.getTime()) ? d : null;
  }

  function kickoffEpoch(rep) {
    var d = kickoffDate(rep);
    return d ? d.getTime() : Number.POSITIVE_INFINITY;
  }

  function dateKey(rep) {
    var d = kickoffDate(rep);
    return d ? dateKeyFormatter.format(d) : "unscheduled";
  }

  function dateLabel(key, sample) {
    if (key === "unscheduled") return "时间待定";
    var d = kickoffDate(sample);
    return d ? dateLabelFormatter.format(d) : key;
  }

  function timeLabel(rep) {
    var d = kickoffDate(rep);
    return d ? timeFormatter.format(d) : "时间待定";
  }

  function formatDateTime(value) {
    var d = value ? new Date(value) : null;
    if (!d || Number.isNaN(d.getTime())) return value || "";
    return dateTimeFormatter.format(d);
  }

  function compareReports(a, b) {
    var diff = kickoffEpoch(a) - kickoffEpoch(b);
    if (diff !== 0) return diff;
    return String(a.matchId || "").localeCompare(String(b.matchId || ""));
  }

  function safeDateId(key) {
    return String(key).replace(/[^a-zA-Z0-9_-]/g, "-");
  }

  function groupReports(reports) {
    var sorted = (reports || []).slice().sort(compareReports);
    var groups = [];
    var byKey = Object.create(null);
    sorted.forEach(function (rep) {
      var key = dateKey(rep);
      if (!byKey[key]) {
        byKey[key] = { key: key, label: dateLabel(key, rep), reports: [] };
        groups.push(byKey[key]);
      }
      byKey[key].reports.push(rep);
    });
    return groups;
  }

  function probsBar(probs) {
    if (!probs) return '<div class="probs"><span class="none">概率：暂无</span></div>';
    var h = pctWidth(probs.home), d = pctWidth(probs.draw), a = pctWidth(probs.away);
    return (
      '<div class="probs"><div class="bar" aria-hidden="true">' +
      '<i class="h" style="width:' + h + '%"></i>' +
      '<i class="d" style="width:' + d + '%"></i>' +
      '<i class="a" style="width:' + a + '%"></i>' +
      "</div><div class=\"legend\">" +
      "<span>主胜 <b>" + esc(pctLabel(probs.home)) + "</b></span>" +
      "<span>平 <b>" + esc(pctLabel(probs.draw)) + "</b></span>" +
      "<span>客胜 <b>" + esc(pctLabel(probs.away)) + "</b></span>" +
      "</div></div>"
    );
  }

  function fetchIndex() {
    return fetch(DATA_BASE + "reports.json", { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("reports.json " + r.status);
      return r.json();
    });
  }

  function reportMatchesQuery(rep, q) {
    return [rep.home, rep.away, rep.competition, rep.stage, rep.title, rep.matchId]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .indexOf(q) !== -1;
  }

  function syncSearchUrl(q) {
    var params = new URLSearchParams(window.location.search);
    if (q) params.set("q", q);
    else params.delete("q");
    var nextUrl = window.location.pathname + (params.toString() ? "?" + params.toString() : "");
    window.history.replaceState(null, "", nextUrl);
  }

  /* ---------- index page ---------- */
  function renderMatchCard(rep) {
    var badge = rep.validationPass
      ? '<span class="badge ok">结构完整</span>'
      : '<span class="badge warn">待完善</span>';
    var teams = rep.home && rep.away
      ? esc(rep.home) + '<span class="vs">vs</span>' + esc(rep.away)
      : esc(rep.title);
    var updated = rep.generatedAt ? "更新 " + esc(formatDateTime(rep.generatedAt)) : "";
    return (
      '<a class="card match-card" href="report.html?id=' + encodeURIComponent(rep.matchId) + '">' +
      '<div class="card-top">' +
      '<span class="competition">' + esc(rep.competition || rep.stage || "比赛") + "</span>" +
      '<span class="kickoff-time">' + esc(timeLabel(rep)) + "</span>" +
      "</div>" +
      '<div class="teams">' + teams + "</div>" +
      probsBar(rep.probs) +
      '<div class="card-foot">' + badge + '<span class="updated">' + updated + "</span></div>" +
      "</a>"
    );
  }

  function renderGroups(list) {
    return groupReports(list)
      .map(function (group) {
        return (
          '<section class="date-group" id="date-' + esc(safeDateId(group.key)) + '">' +
          '<header class="date-group-head">' +
          '<div><p class="eyebrow">开赛日期</p><h2>' + esc(group.label) + "</h2></div>" +
          '<span class="date-count">' + group.reports.length + " 场</span>" +
          "</header>" +
          '<div class="cards">' + group.reports.map(renderMatchCard).join("") + "</div>" +
          "</section>"
        );
      })
      .join("");
  }

  function initIndex(cardsEl) {
    var searchEl = document.getElementById("search");
    var emptyEl = document.getElementById("empty");
    var metaEl = document.getElementById("meta");
    var genEl = document.getElementById("generated");
    var all = [];

    var initialQ = new URLSearchParams(window.location.search).get("q") || "";
    if (searchEl) searchEl.value = initialQ;

    function apply() {
      var q = (searchEl && searchEl.value || "").trim().toLowerCase();
      var list = !q ? all : all.filter(function (r) { return reportMatchesQuery(r, q); });
      cardsEl.innerHTML = renderGroups(list);
      if (emptyEl) emptyEl.hidden = list.length !== 0;
      if (metaEl) metaEl.textContent = "显示 " + list.length + " / 共 " + all.length + " 场";
      syncSearchUrl(q);
    }

    fetchIndex()
      .then(function (idx) {
        all = idx.reports || [];
        if (genEl && idx.generatedAt) genEl.textContent = "站点生成于 " + formatDateTime(idx.generatedAt);
        apply();
      })
      .catch(function (e) {
        cardsEl.innerHTML = '<p class="empty">加载失败：' + esc(e.message) + "</p>";
      });

    if (searchEl) searchEl.addEventListener("input", apply);
  }

  /* ---------- report page ---------- */
  function loadMarkdown(path, target, afterRender) {
    return fetch(DATA_BASE + path, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error(path + " " + r.status);
        return r.text();
      })
      .then(function (md) {
        target.innerHTML = window.marked ? window.marked.parse(md) : "<pre>" + esc(md) + "</pre>";
        if (afterRender) afterRender(target);
      })
      .catch(function (e) {
        target.innerHTML = '<p class="empty">报告加载失败：' + esc(e.message) + "</p>";
      });
  }

  function renderReportSummary(rep) {
    return (
      '<div class="summary-grid">' +
      '<div><p class="eyebrow">比赛</p><h2>' + esc(rep.home && rep.away ? rep.home + " vs " + rep.away : rep.title) + "</h2></div>" +
      '<div><p class="eyebrow">开赛</p><strong>' + esc(formatDateTime(rep.kickoff) || "时间待定") + "</strong></div>" +
      '<div><p class="eyebrow">赛事</p><strong>' + esc(rep.competition || rep.stage || "比赛") + "</strong></div>" +
      '<div><p class="eyebrow">报告</p><strong>' + esc(rep.generatedAt ? formatDateTime(rep.generatedAt) : "最新版本") + "</strong></div>" +
      "</div>" +
      probsBar(rep.probs)
    );
  }

  function renderToc(article, tocEl) {
    if (!tocEl) return;
    var headings = Array.prototype.slice.call(article.querySelectorAll("h2, h3")).slice(0, 12);
    headings.forEach(function (heading, index) {
      if (!heading.id) heading.id = "section-" + index;
      heading.style.scrollMarginTop = "24px";
    });
    tocEl.innerHTML = headings.length
      ? headings.map(function (h) {
          return '<a class="toc-link level-' + h.tagName.toLowerCase() + '" href="#' + esc(h.id) + '">' + esc(h.textContent) + "</a>";
        }).join("")
      : '<p class="toc-empty">暂无目录</p>';
  }

  function initReport(reportEl) {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var titleEl = document.getElementById("title");
    var subEl = document.getElementById("subtitle");
    var versionsEl = document.getElementById("versions");
    var summaryEl = document.getElementById("match-summary");
    var tocEl = document.getElementById("toc");

    function loadVersion(path) {
      loadMarkdown(path, reportEl, function (article) { renderToc(article, tocEl); });
    }

    fetchIndex()
      .then(function (idx) {
        var rep = (idx.reports || []).find(function (r) { return r.matchId === id; });
        if (!rep) {
          reportEl.innerHTML = '<p class="empty">未找到该比赛报告。</p>';
          return;
        }
        if (titleEl) titleEl.textContent = rep.home && rep.away ? rep.home + " vs " + rep.away : rep.title;
        if (subEl) {
          subEl.textContent = [rep.competition || rep.stage, rep.kickoff ? "开赛 " + formatDateTime(rep.kickoff) : ""]
            .filter(Boolean)
            .join(" · ");
        }
        if (summaryEl) summaryEl.innerHTML = renderReportSummary(rep);
        document.title = (titleEl ? titleEl.textContent : "赛前分析") + " · AI 球赛观察";

        var versions = [{ timestamp: rep.generatedAt || "最新", path: rep.current, current: true }].concat(
          rep.history || []
        );
        if (versionsEl) {
          versionsEl.innerHTML = versions
            .map(function (v, i) {
              return (
                '<li><button type="button" data-path="' + esc(v.path) + '" class="' + (i === 0 ? "active" : "") + '">' +
                (v.current ? "当前版本" : "历史版本") +
                '<br><span class="tag">' + esc(v.current ? formatDateTime(v.timestamp) || v.timestamp : v.timestamp) + "</span></button></li>"
              );
            })
            .join("");
          versionsEl.addEventListener("click", function (ev) {
            var target = ev.target;
            var btn = target && target.closest ? target.closest("button") : null;
            if (!btn) return;
            versionsEl.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            loadVersion(btn.getAttribute("data-path"));
          });
        }
        loadVersion(rep.current);
      })
      .catch(function (e) {
        reportEl.innerHTML = '<p class="empty">加载失败：' + esc(e.message) + "</p>";
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var cardsEl = document.getElementById("cards");
    var reportEl = document.getElementById("report");
    if (cardsEl) initIndex(cardsEl);
    if (reportEl) initReport(reportEl);
  });
})();
