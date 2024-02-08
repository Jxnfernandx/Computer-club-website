const burgerIcon = document.getElementById("burger-icon") as HTMLElement;
const hotdogIcon = document.getElementById("hotdog-icon") as HTMLElement;

// Define a function to toggle the display of icons
function toggleIcons(iconToShow: HTMLElement, iconToHide: HTMLElement) {
    iconToHide.style.display = "none";
    iconToShow.style.display = "block";
}

// Add click event listeners to both icons
burgerIcon.addEventListener("click", (event: MouseEvent) => {
    toggleIcons(hotdogIcon, burgerIcon);
});

hotdogIcon.addEventListener("click", (event: MouseEvent) => {
    toggleIcons(burgerIcon, hotdogIcon);
});



