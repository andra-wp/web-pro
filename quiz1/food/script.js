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

// --- Food Data ---
const foodData = [
    {
        name: "Sate Lilit",
        desc: "Minced meat mixed with rich spices, wrapped around lemongrass sticks, creating a unique aroma when grilled.",
        imageUrl: "https://nibble-images.b-cdn.net/nibble/original_images/sate_lilit_enak_di_bali_01_18522d1128.jpg" 
    },
    {
        name: "Babi Guling",
        desc: "A whole roasted pig seasoned with Balinese spices, resulting in crispy skin and tender, flavorful meat.",
        imageUrl: "https://nibble-images.b-cdn.net/nibble/original_images/babi_guling_putu_made_plus_75325fed65_l2OpH1Heb.jfif?class=large"
    },
    {
        name: "Ayam Betutu",
        desc: "Whole chicken slowly cooked with spicy, aromatic herbs until the meat becomes soft and infused with flavor.",
        imageUrl: "https://asset.kompas.com/crops/VoJMFCaXEK_Pgm9W61uIPXmv4G8=/0x0:1000x667/1200x800/data/photo/2022/03/16/62317090c4323.jpg"
    },
    {
        name: "Nasi Campur Bali",
        desc: "Steamed rice served with a variety of Balinese side dishes, all in one plate.",
        imageUrl: "https://img-global.cpcdn.com/recipes/bbdc38a8c3206126/600x852f0.5_0.552021_1.0q80/nasi-campur-bali-foto-resep-utama.webp"
    },
    {
        name: "Lawar",
        desc: "A traditional mix of vegetables, grated coconut, and minced meat seasoned with Balinese spices.",
        imageUrl: "https://nibble-images.b-cdn.net/nibble/original_images/lawar-bali-02.jpeg?class=medium"
    },
    {
        name: "Tum Ayam",
        desc: "Minced chicken mixed with spices and wrapped in banana leaves, then steamed to perfection.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlioiTLb9ptXtKM-tB4Wba0X6AmqaCRi3QkQ&s"
    }
];


// --- FUNCTION 1: Initialize Infinite Marquee ---
const marqueeTrack = document.querySelector('.marquee-track');

function initializeMarquee() {
    const allImages = [...foodData, ...foodData]; 
    allImages.forEach(item => {
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        img.className = 'marquee-image';
        marqueeTrack.appendChild(img);
    });
    const totalWidth = allImages.length * 70; 
    marqueeTrack.style.width = `${totalWidth}vh`;
}


// --- FUNCTION 2: Initialize Food Cards ---
const foodGrid = document.querySelector('.food-grid');

function createFoodCards() {
    foodData.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${food.imageUrl}" alt="${food.name}">
            </div>
            <div class="card-content">
                <h3>${food.name}</h3>
                <p>${food.desc}</p>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// --- Call all functions when page loads ---
initializeMarquee();
createFoodCards();
