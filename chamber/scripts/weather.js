// Wheather API

const town = document.querySelector("#town");
const graphic = document.querySelector("#graphic");
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
const lat = -23.6820636
const lon = -46.9249429

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`

async function apiFetch() {
    
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    displayResults(data); // uncomment when ready
}

function displayResults(data) {
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`
    high.innerHTML = `High: ${data.main.temp_max.toFixed(0)}&deg;F`
    low.innerHTML = `Low: ${data.main.temp_min.toFixed(0)}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`
    const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('alt', description.innerHTML);

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

// Display companies
const members = 'https://gu1lh3rm3-0.github.io/wdd231/chamber/data/members.json';

async function loadCompanies() {
    const response = await fetch(members);
    const data = await response.json();
    displayCompanies(data);
}

loadCompanies();

function displayCompanies(data) {
    const companyCard1 = document.querySelector(".companies1");
    companyCard1.innerHTML = "";
    const filter = data.companies.filter(company => company.membership === "Gold" || company.membership === "Silver");
    const random = filter.sort(() => Math.random() - 0.5).slice(0, 3);

    random.forEach(company => {
        const card = document.createElement("section");
        card.innerHTML = `
            <h2>${company.name}</h2>
            <img src="${company.logo}" alt="Logo of ${company.name}" loading="lazy" width="200">
            <p>${company.phone}</p>
            <p><a href="mailto:${company.email}">${company.email}</a></p>
            <p><a href="${company.URL}" target="_blank">${company.URL}</a></p>
            <p>Membership Level: ${company.membership}</p>
        `;
        companyCard1.appendChild(card);
    });
    
}

// Hamburger Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

// Footer // Last Modified Date and Current Year
document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();