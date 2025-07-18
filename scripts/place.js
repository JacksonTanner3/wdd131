const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

function calculateWindChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        return windChill.toFixed(1) + "°F";
    } else {
        return "N/A";
    }
}

const temperature = 77;
const windSpeed = 6.2;

const windChillSpan = document.getElementById('windChill');

const calculatedWindChill = calculateWindChill(temperature, windSpeed);

windChillSpan.textContent = calculatedWindChill;
