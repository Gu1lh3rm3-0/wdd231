// Wheather API

const town = document.getElementById("#town");
const graphic = document.querySelector("#graphic");
const description = document.querySelector("#description");
const temp = document.querySelector("#temperature");

const key = "0c6e110cf0689e7250abc2a43c094b33"
const lat = -23.6820636
const lon = -46.9249429

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    console.log(weatherData);
    town.textContent = weatherData.name;
}