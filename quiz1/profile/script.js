const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Toggle menu saat hamburger di-klik
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Tutup menu saat salah satu link di-klik
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});