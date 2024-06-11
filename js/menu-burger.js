// HIDDEN MENU SELECTION
const hiddenMenu = document.getElementById('navbar');

// BURGER BUTTON SELECTION
const burgerButton = document.getElementById('burger-button');

// ON CLICK => CALL OPEN/CLOSE FUNCTION
burgerButton.onclick = openCloseNav;

// OPEN/CLOSE FUNCTION
function openCloseNav() {
    navbar.classList.toggle("hidden");
}
