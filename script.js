function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(p => p.classList.add("hidden"));

  document.getElementById(pageId).classList.remove("hidden");
}

// background changer (simple version)
function setBg() {
  const colors = ["#0f0f0f", "#1a1a2e", "#0d1b2a", "#111"];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}
