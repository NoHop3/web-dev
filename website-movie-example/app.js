const movieSlide = document.querySelector('.movieSlide');
const movieImages = document.querySelectorAll('.movieSlide img');

// Buttonss

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter

let counter = 1;
const size = movieImages[0].clientWidth;

movieSlide.style.transform = 'translateX(' + (-size * counter ) +  'px)';

//Button listeners

nextBtn.addEventListener("click", () => {
  if (counter >= movieImages.length - 1) return;
  movieSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  movieSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  movieSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  movieSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

movieSlide.addEventListener('transitionend', () => {
  if (movieImages[counter].id === 'lastMovie') {
    movieSlide.style.transition = "none";
    counter = movieImages.length - 2;
    movieSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (movieImages[counter].id === 'firstMovie') {
    movieSlide.style.transition = "none";
    counter = movieImages.length - counter;
    movieSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
  }
});
