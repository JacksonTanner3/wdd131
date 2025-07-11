const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;
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