function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.add("hidden"));

  document.getElementById(pageId).classList.remove("hidden");

  // highlight sidebar button
  const buttons = document.querySelectorAll(".sidebar button");
  buttons.forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`[data-page="${pageId}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}
function setTheme(theme) {
  const bg = document.querySelector(".bg");

  const themes = {
    default: ["#0a0f16", "#1a1f2e", "#0f2a1a", "#2a0f1a"],
    blue:    ["#0a0f16", "#0d1b2a", "#1b263b", "#0a3a5a"],
    green:   ["#0a0f16", "#0f2a1a", "#1a3b2a", "#0b4a2a"],
    red:     ["#0a0f16", "#2a0f0f", "#3b1a1a", "#5a0a1a"]
  };

  const c = themes[theme];

  bg.style.background = `
    linear-gradient(-45deg,
      ${c[0]},
      ${c[1]},
      ${c[2]},
      ${c[3]}
    )
  `;
}
function runSearch() {
  const query = document.getElementById("searchInput").value;
  const frame = document.getElementById("searchFrame");

  if (!query) return;

  frame.src = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
}
