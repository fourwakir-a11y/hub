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
  const body = document.body;

  body.classList.remove(
    "theme-default",
    "theme-blue",
    "theme-green",
    "theme-red"
  );

  body.classList.add("theme-" + theme);
}
