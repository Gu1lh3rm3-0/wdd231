import { discover } from '../data/discover.mjs'; 

const showPlaces = document.querySelector('#discover-cards');

function createCard(discover) {
    discover.forEach(place => {
        const card = document.createElement('div');

        const name = document.createElement('h2');
        name.innerHTML = place.name;
        card.appendChild(name);

        const figure = document.createElement('figure');
        card.appendChild(figure);
        const photo = document.createElement('img');
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        photo.loading = 'lazy';
        figure.appendChild(photo);

        const address = document.createElement('address');
        address.innerHTML = place.address;
        card.appendChild(address);

        const description = document.createElement('p');
        description.innerHTML = place.description;
        card.appendChild(description);

        const button = document.createElement('button');
        button.innerHTML = place.button ? 'Learn More' : 'No Link Available';
        button.addEventListener('click', () => {
            window.open(place.button, '_blank');
        });
        card.appendChild(button);

        showPlaces.appendChild(card);
    });
}

createCard(discover);

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

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