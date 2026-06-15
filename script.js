function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.add("hidden");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.remove("hidden");
  } else {
    console.log("Page not found:", pageId);
  }
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
