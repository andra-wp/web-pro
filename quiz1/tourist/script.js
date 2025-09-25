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


// --- Modal Gallery Logic ---
const gridItems = document.querySelectorAll('.grid-item');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close');

// Fungsi untuk membuka modal
function openModal(targetSelector) {
    // 1. Ambil konten dari div data tersembunyi
    const contentSource = document.querySelector(targetSelector);
    if (contentSource) {
        // 2. Kosongkan body modal sebelumnya dan isi dengan yang baru
        modalBody.innerHTML = contentSource.innerHTML;
        // 3. Tampilkan overlay modal
        modalOverlay.classList.add('active');
    }
}

// Fungsi untuk menutup modal
function closeModal() {
    modalOverlay.classList.remove('active');
    // Hapus konten setelah ditutup agar tidak menumpuk
    setTimeout(() => {
        modalBody.innerHTML = '';
    }, 400); // Sesuaikan dengan durasi transisi CSS
}

// Tambahkan event listener ke setiap item di galeri
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalTarget = item.dataset.modalTarget;
        openModal(modalTarget);
    });
});

// Event listener untuk tombol close
modalCloseBtn.addEventListener('click', closeModal);

// Event listener untuk menutup modal saat mengklik area overlay (di luar konten)
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Event listener untuk menutup modal dengan tombol 'Escape'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});