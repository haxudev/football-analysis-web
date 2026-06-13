/* AI 球赛观察 — static site logic (index list + report detail). */
(function () {
  "use strict";

  // Data payload is delivered by the private harness into this repo's data/ dir.
  var DATA_BASE = "data/";

  function pct(n) {
    return Math.round((Number(n) || 0) * 100);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function probsBar(probs) {
    if (!probs) return '<div class="probs"><span class="none">概率：暂无</span></div>';
    var h = pct(probs.home), d = pct(probs.draw), a = pct(probs.away);
    return (
      '<div class="probs"><div class="bar">' +
      '<i class="h" style="width:' + h + '%"></i>' +
      '<i class="d" style="width:' + d + '%"></i>' +
      '<i class="a" style="width:' + a + '%"></i>' +
      "</div><div class=\"legend\">" +
      "<span>主胜 <b>" + h + "%</b></span>" +
      "<span>平 <b>" + d + "%</b></span>" +
      "<span>客胜 <b>" + a + "%</b></span>" +
      "</div></div>"
    );
  }

  function fetchIndex() {
    return fetch(DATA_BASE + "reports.json", { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("reports.json " + r.status);
      return r.json();
    });
  }

  /* ---------- index page ---------- */
  function renderCards(list) {
    return list
      .map(function (rep) {
        var badge = rep.validationPass
          ? '<span class="badge ok">✓ 结构完整</span>'
          : '<span class="badge warn">⚠ 待完善</span>';
        var teams = rep.home && rep.away
          ? esc(rep.home) + '<span class="vs">vs</span>' + esc(rep.away)
          : esc(rep.title);
        var updated = rep.generatedAt ? "更新于 " + esc(rep.generatedAt) : "";
        return (
          '<a class="card" href="report.html?id=' + encodeURIComponent(rep.matchId) + '">' +
          '<div class="competition">' + esc(rep.competition || rep.stage || "比赛") + "</div>" +
          '<div class="teams">' + teams + "</div>" +
          '<div class="kickoff">' + (rep.kickoff ? "开赛 " + esc(rep.kickoff) : "时间待定") + "</div>" +
          probsBar(rep.probs) +
          '<div class="card-foot">' + badge + '<span class="updated">' + updated + "</span></div>" +
          "</a>"
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

    function apply() {
      var q = (searchEl && searchEl.value || "").trim().toLowerCase();
      var list = !q
        ? all
        : all.filter(function (r) {
            return [r.home, r.away, r.competition, r.stage, r.title]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .indexOf(q) !== -1;
          });
      cardsEl.innerHTML = renderCards(list);
      if (emptyEl) emptyEl.hidden = list.length !== 0;
      if (metaEl) metaEl.textContent = list.length + " 场比赛";
    }

    fetchIndex()
      .then(function (idx) {
        all = idx.reports || [];
        if (genEl && idx.generatedAt) genEl.textContent = "站点生成于 " + new Date(idx.generatedAt).toLocaleString();
        apply();
      })
      .catch(function (e) {
        cardsEl.innerHTML = '<p class="empty">加载失败：' + esc(e.message) + "</p>";
      });

    if (searchEl) searchEl.addEventListener("input", apply);
  }

  /* ---------- report page ---------- */
  function loadMarkdown(path, target) {
    return fetch(DATA_BASE + path, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error(path + " " + r.status);
        return r.text();
      })
      .then(function (md) {
        target.innerHTML = window.marked ? window.marked.parse(md) : "<pre>" + esc(md) + "</pre>";
      })
      .catch(function (e) {
        target.innerHTML = '<p class="empty">报告加载失败：' + esc(e.message) + "</p>";
      });
  }

  function initReport(reportEl) {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var titleEl = document.getElementById("title");
    var subEl = document.getElementById("subtitle");
    var versionsEl = document.getElementById("versions");

    fetchIndex()
      .then(function (idx) {
        var rep = (idx.reports || []).find(function (r) { return r.matchId === id; });
        if (!rep) {
          reportEl.innerHTML = '<p class="empty">未找到该比赛报告。</p>';
          return;
        }
        if (titleEl) titleEl.textContent = rep.home && rep.away ? rep.home + " vs " + rep.away : rep.title;
        if (subEl) {
          subEl.textContent = [rep.competition || rep.stage, rep.kickoff ? "开赛 " + rep.kickoff : ""]
            .filter(Boolean)
            .join(" · ");
        }
        document.title = (titleEl ? titleEl.textContent : "赛前分析") + " · AI 球赛观察";

        var versions = [{ timestamp: rep.generatedAt || "最新", path: rep.current, current: true }].concat(
          rep.history || []
        );
        if (versionsEl) {
          versionsEl.innerHTML = versions
            .map(function (v, i) {
              return (
                '<li><button data-path="' + esc(v.path) + '" class="' + (i === 0 ? "active" : "") + '">' +
                (v.current ? "当前版本" : "历史版本") +
                '<br><span class="tag">' + esc(v.timestamp) + "</span></button></li>"
              );
            })
            .join("");
          versionsEl.addEventListener("click", function (ev) {
            var btn = ev.target.closest("button");
            if (!btn) return;
            versionsEl.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            loadMarkdown(btn.getAttribute("data-path"), reportEl);
          });
        }
        loadMarkdown(rep.current, reportEl);
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
