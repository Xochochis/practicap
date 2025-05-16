const container = document.getElementById("container");

const catGifs = [
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
];

document.body.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = catGifs[Math.floor(Math.random() * catGifs.length)];
  img.classList.add("kitty");

  const size = 80 + Math.random() * 50;
  img.style.width = size + "px";
  img.style.height = size + "px";

  img.style.left = Math.random() * (window.innerWidth - size) + "px";
  img.style.top = Math.random() * (window.innerHeight - size) + "px";

  img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

  container.appendChild(img);
});
