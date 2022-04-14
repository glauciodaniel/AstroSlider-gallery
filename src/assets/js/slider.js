import { db } from "./db.js";

const sliderGallery = document.querySelector(".slider-gallery");
let position = 0;

const next = (x) => (x < db.length - 1 ? x + 1 : 0);
const prev = (x) => (x > 0 ? x - 1 : 0);

function showSlider(gallery, position) {
  const astros = gallery.querySelector(".astros");
  const galaxy = gallery.querySelector(".galaxy");
  const title = galaxy.querySelector(".title");
  const titleH1 = title.querySelector("h1");
  const titleH2 = title.querySelector("h2");

  titleH1.innerHTML = db[position].title;
  titleH2.innerHTML = db[position].description;

  astros.style.background = `url("../src/assets/images/astros/${db[position].image}") no-repeat center center`;
  astros.style.backgroundSize = "contain";
}
showSlider(sliderGallery, position);

const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");

btnPrev.addEventListener("click", () => {
  position = prev(position);
  showSlider(sliderGallery, position);
});

btnNext.addEventListener("click", () => {
  position = next(position);
  showSlider(sliderGallery, position);
});
console.log(db[position]);
