const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.getElementById('lastModified');
if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
}

const mainNav = document.querySelector("nav");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');

    if (mainNav.classList.contains('open')) {
        menuButton.textContent = '✖';
    } else {
        menuButton.textContent = '☰';
    }
});

const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        areaSqFt: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-8209.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        areaSqFt: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55313.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        areaSqFt: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-56855.jpg"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        areaSqFt: 88562,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-61958.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        areaSqFt: 53982,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-48707.jpg"
    },
    {
        templeName: "Lima Peru Temple",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        areaSqFt: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12726.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        areaSqFt: 107400,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-1568.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise, Idaho",
        dedicated: "1984, May, 30",
        areaSqFt: 35868,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-52950.jpg"
    },
    {
        templeName: "Houston Texas Temple",
        location: "Houston, Texas",
        dedicated: "2000, August, 26",
        areaSqFt: 33970,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-48088.jpg"
    },
    {
        templeName: "Bismarck North Dakota Temple",
        location: "Bismarck, North Dakota",
        dedicated: "1999, September, 19",
        areaSqFt: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bismarck-north-dakota-temple/bismarck-north-dakota-temple-8771.jpg"
    },
];

const templeCardsContainer = document.getElementById('temple-cards-container');

function displayTemples(templeList) {
    templeCardsContainer.innerHTML = '';

    templeList.forEach(temple => {
        const templeCard = document.createElement('section');

        const name = document.createElement('h2');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement('p');
        const dedicatedDate = new Date(temple.dedicated);
        dedicated.textContent = `Dedicated: ${dedicatedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.areaSqFt.toLocaleString()} sq ft`;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = 'lazy';

        img.width = 400;
        img.height = 250;

        templeCard.appendChild(name);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);
        templeCard.appendChild(img);

        templeCardsContainer.appendChild(templeCard);
    });
}

displayTemples(temples);

const homeBtn = document.getElementById('homeBtn');
const oldBtn = document.getElementById('oldBtn');
const newBtn = document.getElementById('newBtn');
const largeBtn = document.getElementById('largeBtn');
const smallBtn = document.getElementById('smallBtn');

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    displayTemples(temples);
});

oldBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        return dedicatedYear < 1900;
    });
    displayTemples(oldTemples);
});

newBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTemples = temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        return dedicatedYear > 2000;
    });
    displayTemples(newTemples);
});

largeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(temple => temple.areaSqFt > 90000);
    displayTemples(largeTemples);
});

smallBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(temple => temple.areaSqFt < 10000);
    displayTemples(smallTemples);
});
