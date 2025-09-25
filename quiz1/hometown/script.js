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
const placeName = document.getElementById('placeName');
const placeDesc = document.getElementById('placeDesc');
const descriptionContainer = document.querySelector('.slide-description');

const slideData = [
    {
        name: "Ulun Danu Beratan Temple",
        desc: "Tabanan is a regency in Bali, often called the “rice bowl of Bali” due to its extensive rice terraces. It’s known for its lush landscapes, cool mountain air, and traditional Balinese culture, offering a peaceful escape from busy tourist areas."
    },
    {
        name: "Bali Handara Gate",
        desc: "The region is home to stunning natural attractions such as serene lakes, misty mountains, and terraced fields. Visitors can enjoy fresh air, scenic views, and outdoor activities like trekking and exploring waterfalls."
    },
    {
        name: "Buyan Lake",
        desc: "Tabanan preserves rich cultural heritage with temples, traditional villages, and local markets. Popular destinations include Ulun Danu Beratan Temple, Bali Handara Gate, and Buyan Lake, each offering a unique glimpse of Balinese spirituality and natural beauty."
    }
];

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  descriptionContainer.classList.add('is-changing');

  setTimeout(() => {
    placeName.textContent = slideData[index].name;
    placeDesc.textContent = slideData[index].desc;
    
    descriptionContainer.classList.remove('is-changing');
  }, 300);
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
  nextBtn.click();
}, 5000);

showSlide(currentSlide);
