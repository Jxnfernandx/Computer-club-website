const nav = document.getElementById("primary-navigation") as HTMLElement;
const navToggle = document.querySelector(".mobile-nav-toggle") as HTMLElement;

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    console.log(visibility)
})

