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

const gridItems = document.querySelectorAll('.grid-item');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close');

function openModal(targetSelector) {
    const contentSource = document.querySelector(targetSelector);
    if (contentSource) {
        modalBody.innerHTML = contentSource.innerHTML;
        modalOverlay.classList.add('active');
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalBody.innerHTML = '';
    }, 400);
}

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalTarget = item.dataset.modalTarget;
        openModal(modalTarget);
    });
});

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
