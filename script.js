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
function setTheme(color) {
  document.body.style.background = color;
}
