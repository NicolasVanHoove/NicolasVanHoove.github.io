// Section selection
const cvNavbar = document.getElementById('section-cv');

const sectionCompetence = document.getElementById('section-competence');

// Link selection
const competenceLink = document.getElementById('competence-link');

// On click
competenceLink.onclick = displayCompetenceSection;

// Function
function displayCompetenceSection() {
    sectionCompetence.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}