function changeGame(title, desc, image) {
  const hero = document.getElementById("hero");

  document.getElementById("title").innerText = title;
  document.getElementById("description").innerText = desc;

  hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${image})`;
}
