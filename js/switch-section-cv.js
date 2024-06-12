// Section selection
const cvNavbar = document.getElementById('section-cv');

const sectionCompetence = document.getElementById('section-competence');

const sectionFormation = document.getElementById('section-formation');

// Link selection
const competenceLink = document.getElementById('competence-link');

const formationLink = document.getElementById('formation-link');

// On click
competenceLink.onclick = displayCompetenceSection;

formationLink.onclick = displayFormationSection;

// Function
function displayCompetenceSection() {
    sectionCompetence.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}

function displayFormationSection() {
    sectionFormation.classList.remove('hidden');
    cvNavbar.classList.add('hidden');
}