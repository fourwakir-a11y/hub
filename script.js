function changeGame(title, desc, image) {
  document.getElementById("title").innerText = title;
  document.getElementById("description").innerText = desc;

  document.getElementById("hero").style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${image})`;
}
