// DISPLAY/MUTE NAVBAR 

// Navbar selection
const hiddenMenu = document.getElementById('navbar');

// Burger button selection
const burgerButton = document.getElementById('burger-button');

// On click => call openCloseNav function
burgerButton.onclick = openCloseNav;

// Open/close function
function openCloseNav() {
    navbar.classList.toggle("hidden");
}
