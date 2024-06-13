// PAGE SELECT
// homepage
const homePage = document.getElementById('home-page');
console.log(homePage);
// cv - page
const cvPage = document.getElementById('cv-homepage');
console.log(cvPage);
// cv - competence - page
const cvCompetencePage = document.getElementById('cv-competence-page');
console.log(cvCompetencePage);
// cv - formation - page
const cvFormationPage = document.getElementById('cv-formation-page');
console.log(cvFormationPage);
// cv - experience - page
const cvExperiencePage = document.getElementById('cv-experience-page');
console.log(cvExperiencePage);
// portfolio - page
const portfolioPage = document.getElementById('portfolio-page');
console.log(portfolioPage);


// LINK SELECT
// homepage link
const homeLink = document.getElementById('homepage-link');
console.log(homeLink);
// cv - page - link 
const cvLink = document.getElementById('cv-link');
console.log(cvLink);
// cv - competence - page -link
const competenceLink = document.getElementById('competence-link');
console.log(competenceLink);
// cv - formation - page -link
const formationLink = document.getElementById('formation-link');
console.log(formationLink);
// cv - experience - page -link
const experienceLink = document.getElementById('experience-link');
console.log(experienceLink)
// portfolio - link
const portfolioLink = document.getElementById('portfolio-link');
console.log(portfolioLink)

// On click
homeLink.onclick = displayHomepage;
cvLink.onclick = displayCv;
competenceLink.onclick = displayCompetence;
formationLink.onclick = displayFormation;
experienceLink.onclick = displayExperience;
portfolioLink.onclick = displayPortfolio;

// Function
function displayHomepage() {
    homePage.classList.remove('hidden');
    cvPage.classList.add('hidden');
    cvCompetencePage.classList.add('hidden');
    cvFormationPage.classList.add('hidden');
    cvExperiencePage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayCv() {
    cvPage.classList.remove('hidden');
    homePage.classList.add('hidden');
    cvCompetencePage.classList.add('hidden');
    cvFormationPage.classList.add('hidden');
    cvExperiencePage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayCompetence() {
    cvCompetencePage.classList.remove('hidden');
    homePage.classList.add('hidden');
    cvPage.classList.add('hidden')
    cvFormationPage.classList.add('hidden');
    cvExperiencePage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayFormation() {
    cvFormationPage.classList.remove('hidden');
    cvCompetencePage.classList.add('hidden');
    homePage.classList.add('hidden');
    cvPage.classList.add('hidden');
    cvExperiencePage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayExperience() {
    cvExperiencePage.classList.remove('hidden');
    cvFormationPage.classList.add('hidden');
    cvCompetencePage.classList.add('hidden');
    homePage.classList.add('hidden');
    cvPage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
}

function displayPortfolio() {
    portfolioPage.classList.remove('hidden');
    cvExperiencePage.classList.add('hidden');
    cvFormationPage.classList.add('hidden');
    cvCompetencePage.classList.add('hidden');
    homePage.classList.add('hidden');
    cvPage.classList.add('hidden');
}