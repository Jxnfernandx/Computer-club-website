"use strict";
const burgerIcon = document.getElementById("burger-icon");
const hotdogIcon = document.getElementById("hotdog-icon");
// Define a function to toggle the display of icons
function toggleIcons(iconToShow, iconToHide) {
    iconToHide.style.display = "none";
    iconToShow.style.display = "block";
}
// Add click event listeners to both icons
burgerIcon.addEventListener("click", (event) => {
    toggleIcons(hotdogIcon, burgerIcon);
});
hotdogIcon.addEventListener("click", (event) => {
    toggleIcons(burgerIcon, hotdogIcon);
});
