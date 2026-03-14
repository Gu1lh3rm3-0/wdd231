const cards = document.querySelector('#cards');

async function getCompaniesData() {
    try {
        const response = await fetch('chamber/data/companies.json');
        const data = await response.json();
        displayCompanies(data.companies);
    } catch (error) {
        console.error('Error fetching companies data:', error);
    }
}

getCompaniesData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let fullname = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        
        logo.setAttribute('src', company.logo);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        card.appendChild(logo);
        card.appendChild(fullname);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);

    });
}