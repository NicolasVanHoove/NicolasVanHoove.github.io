// Section selection
const cvNavbar = document.getElementById('section-cv');

const sectionCompetence = document.getElementById('section-competence');

const sectionTechno = document.getElementById('technologies');

// Link selection
const competenceLink = document.getElementById('competence-link');

// On click
competenceLink.onclick = displayCompetenceSection;

// Function
function displayCompetenceSection() {
    sectionCompetence.classList.remove('hidden');
    sectionTechno.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}