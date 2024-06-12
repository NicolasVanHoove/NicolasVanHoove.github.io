// Section selection
const cvNavbar = document.getElementById('section-cv');

const sectionCompetence = document.getElementById('section-competence');

const sectionFormation = document.getElementById('section-formation');

const sectionExperience = document.getElementById('section-experience');

// Link selection
const competenceLink = document.getElementById('competence-link');

const formationLink = document.getElementById('formation-link');

const experienceLink = document.getElementById('experience-link');

// On click
competenceLink.onclick = displayCompetenceSection;

formationLink.onclick = displayFormationSection;

experienceLink.onclick = displayExperienceSection;

// Function
function displayCompetenceSection() {
    sectionCompetence.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}

function displayFormationSection() {
    sectionFormation.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}

function displayExperienceSection() {
    sectionExperience.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}