function changeGame(title, desc, image) {
  const hero = document.getElementById("hero");

  if (!hero) {
    console.log("Hero not found — check id='hero'");
    return;
  }

  document.getElementById("title").innerText = title;
  document.getElementById("description").innerText = desc;

  hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${image})`;
}
