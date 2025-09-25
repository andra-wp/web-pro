// --- Hamburger Menu Logic ---
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

// --- Image Slider Logic ---
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
        desc: "A serene temple floating on Lake Beratan, surrounded by misty mountains and lush greenery."
    },
    {
        name: "Bali Handara Gate",
        desc: "An iconic gate framed by towering trees, offering a picturesque entrance to the Bali Handara Golf & Resort."
    },
    {
        name: "Buyan Lake",
        desc: "Serene highland lake in Bedugul, surrounded by lush forests and misty hills — a peaceful spot away from Bali’s crowds."
    }
];

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  // Geser gambar
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  // --- PERBAIKAN UTAMA: LOGIKA ANIMASI TEKS ---
  // 1. Tambahkan kelas untuk memulai animasi keluar
  descriptionContainer.classList.add('is-changing');

  // 2. Tunggu animasi keluar selesai, lalu ganti teks dan mulai animasi masuk
  setTimeout(() => {
    placeName.textContent = slideData[index].name;
    placeDesc.textContent = slideData[index].desc;
    
    // 3. Hapus kelas untuk memulai animasi masuk (kembali ke state normal)
    descriptionContainer.classList.remove('is-changing');
  }, 300); // Durasi ini harus cocok dengan durasi transisi di CSS
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Auto-play slider
setInterval(() => {
  nextBtn.click();
}, 5000);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);