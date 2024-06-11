// Page selection
const homePage = document.getElementById('homepage-article');
console.log(homePage);
const cvPage = document.getElementById('cv-article');
console.log(cvPage);
const portfolioPage = document.getElementById('portfolio-article');

// Link selection
const homeLink = document.getElementById('homepage-link');
console.log(homeLink);
const cvLink = document.getElementById('cv-link');
console.log(cvLink);
const portfolioLink = document.getElementById('portfolio-link');
console.log(portfolioLink);

// On click
homeLink.onclick = displayHomepage;
cvLink.onclick = displayCv;
portfolioLink.onclick = displayPortfolio;


// Function
function displayHomepage() {
    homePage.classList.remove('hidden');
    cvPage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayCv() {
    cvPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayPortfolio() {
    portfolioPage.classList.remove('hidden');
    cvPage.classList.add('hidden');
    homePage.classList.add('hidden');
}