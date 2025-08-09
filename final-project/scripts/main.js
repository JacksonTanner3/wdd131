const motorcycles = [
    {
        id: 1,
        modelName: 'Kawasaki Ninja 400',
        year: 2025,
        price: 5100,
        imageURL: 'images/ninja-400.jpg',
        type: 'Sport',
        isNew: true,
        description: 'One of hte best overall beginner Motorcycles out there with a Sporty lifestyle.',
    },
    {
        id: 2,
        modelName: 'Honda Rebel 500',
        year: 2022,
        price: 6800,
        imageURL: 'images/rebel-500.jpg',
        type: 'Cruiser',
        isNew: false,
        description: 'Comfortable and stylish cruiser perfect for cruising around town.',
    },
    {
        id: 3,
        modelName: 'Honda Transalp 750',
        year: 2025,
        price: 9999,
        imageURL: 'images/transalp-750.jpg',
        type: 'Adventure',
        isNew: true,
        description: 'The ultimate all-purpose bike for both highways and light off-road trails.',
    },
    {
        id: 4,
        modelName: 'Yamaha MT 07',
        year: 2023,
        price: 8599,
        imageURL: 'images/mt-07.jpg',
        type: 'Standard',
        isNew: false,
        description: 'An incredible handling bike for city riding and for beginners and Experts.',
    },
    {
        id: 5,
        modelName: 'Yamaha V-star 650',
        year: 2005,
        price: 3000,
        imageURL: 'images/vstar-650.jpg',
        type: 'Cruiser',
        isNew: false,
        description: 'A heavy-duty cruiser with a classic look and powerful engine.',
    },
    {
        id: 6,
        modelName: 'Kawasaki Versys 650',
        year: 2025,
        price: 9500,
        imageURL: 'images/versys-650.jpg',
        type: 'Adventure',
        isNew: true,
        description: 'Rugged and reliable, this bike is built for off-road exploration.',
    },
];

function renderBikes(bikes) {
    const container = document.getElementById('bike-container');
    const featuredContainer = document.getElementById('featured-bikes-container');

    const targetContainer = container || featuredContainer;

    if (targetContainer) {
        targetContainer.innerHTML = '';

        const bikeHTML = bikes.map(bike => {
            const newTag = bike.isNew ? `<span class="card-tag">NEW</span>` : '';

            return `
                <div class="card">
                    <img data-src="${bike.imageURL}" alt="${bike.modelName}" class="card-image lazy">
                    <div class="card-content">
                        ${newTag}
                        <h3 class="card-heading">${bike.modelName}</h3>
                        <p class="card-meta">${bike.year} | ${bike.type}</p>
                        <p class="card-price">$${bike.price.toLocaleString()}</p>
                        <p class="card-description">${bike.description}</p>
                        <button class="card-button" onclick="addToWishlist(${bike.id})">Add to Wishlist</button>
                    </div>
                </div>
            `;
        }).join('');

        targetContainer.innerHTML = bikeHTML;

        lazyLoadImages();
    }
}

function filterBikes(type) {
    let filteredBikes = motorcycles;
    if (type.toLowerCase() !== 'all') {
        filteredBikes = motorcycles.filter(bike => bike.type.toLowerCase() === type.toLowerCase());
    }
    renderBikes(filteredBikes);
}

function addToWishlist(bikeId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.includes(bikeId)) {
        wishlist.push(bikeId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        console.log(`Added bike with ID ${bikeId} to wishlist.`);
    } else {
        console.log(`Bike with ID ${bikeId} is already in the wishlist.`);
    }
}

function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
    });
}


const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filterType = e.target.id.split('-')[1];
        filterBikes(filterType);
    });
});


window.onload = function () {
    if (document.getElementById('bike-container')) {
        renderBikes(motorcycles);
    }

    if (document.getElementById('featured-bikes-container')) {
        const featuredBikes = motorcycles.filter(bike => bike.isNew);
        renderBikes(featuredBikes);
    }

};