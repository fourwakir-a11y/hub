const games = [
{
 title: "Snake",
 banner: "snake-banner.jpg",
 description: "Classic snake."
},
{
 title: "Flappy Bird",
 banner: "flappy-banner.jpg",
 description: "Fly through pipes."
}
];
heroTitle.textContent = game.title;
heroDesc.textContent = game.description;
heroImage.src = game.banner;
