document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastModified').textContent = lastModified.toLocaleString('en-US', options);

    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('reviewCount').textContent = reviewCount;
});
