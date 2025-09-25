const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});


const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slides-wrapper .slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 3000);

showSlide(currentSlide);
