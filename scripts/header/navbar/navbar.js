import { hamburger, navMenu } from "./navbarConstants.js";

function hamburgerEffect() {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
};

export function navbarEffects() {
    hamburgerEffect();
}