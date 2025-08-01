const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Lights",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Extractor",
        avgRating: 3.9
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        avgRating: 3.5
    },
    {
        id: "jj-1969",
        name: "Warp Stabilizer",
        avgRating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('productName');

    function populateProductSelect() {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    populateProductSelect();

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastModified').textContent = lastModified.toLocaleString('en-US', options);
});
