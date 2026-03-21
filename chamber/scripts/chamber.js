const cards = document.querySelector('.cards');
const members = 'https://gu1lh3rm3-0.github.io/wdd231/chamber/data/members.json';

async function getCompaniesData() {
    const response = await fetch(members);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let email = document.createElement("a");
        let membership = document.createElement("a");
        let image = document.createElement("img");

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        url.textContent = company.url;
        url.setAttribute("href", company.url);
        email.textContent = company.email;
        email.setAttribute("href", `E-mail:${company.email}`);
        membership.textContent = company.membership;
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute("src", company.logo);
        image.setAttribute('alt', `Logo of ${company.name}`);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(email);
        card.appendChild(membership);
        cards.appendChild(card);
    });
}

document.getElementById("lastModified").innerHTML = document.lastModified;
