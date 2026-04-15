const graphic = document.createElement("img");
const town = document.querySelector("#town");
const temp = document.querySelector("#temperature");
const description = document.querySelector("#description");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const afterTomorrow = document.querySelector("#day3");

const key = "0c6e110cf0689e7250abc2a43c094b33"
const lat = -23.5858
const lon = -46.6584

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`

async function apiFetch() {
    
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    displayResults(data);
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('alt', data.weather[0].description);
    document.querySelector(".current-weather").appendChild(graphic); 
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`
    high.innerHTML = `High: ${data.main.temp_max.toFixed(0)}&deg;F`
    low.innerHTML = `Low: ${data.main.temp_min.toFixed(0)}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`


    today.innerHTML = `Today: ${data.main.temp.toFixed(0)}&deg;F`
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
    fetch(forecastURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            tomorrow.innerHTML = `Tomorrow: ${data.list[8].main.temp.toFixed(0)}&deg;F`
            afterTomorrow.innerHTML = `Day After Tomorrow: ${data.list[16].main.temp.toFixed(0)}&deg;F`
        })

}

apiFetch();

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

// Dialog functionality for events information

const c6Button = document.querySelector("#learnC6");
const arenaButton = document.querySelector("#learnArena");
const coffeeButton = document.querySelector("#learnCoffee");

const dialog = document.querySelector("#eventsDialog");
const dialogContent = document.querySelector("#eventsDialog div");
const closeButton = document.querySelector("#closeDialog");

c6Button.addEventListener("click", () => {
    dialogContent.innerHTML = "One of São Paulo’s biggest music festivals, featuring both international and Brazilian artists across genres like jazz, rock, pop, and MPB.";
    dialog.showModal();
});

arenaButton.addEventListener("click", () => {
    dialogContent.innerHTML = "A large-scale fan event during the World Cup, with giant screens broadcasting matches, live concerts, and interactive football experiences.";
    dialog.showModal();
});

coffeeButton.addEventListener("click", () => {
    dialogContent.innerHTML = "A festival dedicated to coffee culture, offering tastings, workshops, live music, and food experiences—perfect for coffee lovers.";
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const messageContainer = document.querySelector("#message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisitTime = parseInt(lastVisit);
  const diffTime = now - lastVisitTime;

  const oneDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor(diffTime / oneDay);

  if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetween} days ago.`;
  }
}
messageContainer.textContent = message;
localStorage.setItem("lastVisit", now);

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();