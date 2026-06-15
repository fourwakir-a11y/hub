function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(p => p.classList.add("hidden"));

  document.getElementById(pageId).classList.remove("hidden");
}

function setBg() {
  const colors = ["#0a0f16", "#111a26", "#0d1b2a", "#121212"];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}
