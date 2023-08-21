import { switchButton, main1Section, switchButtonBackground, main2Section } from "./bodyConstants.js";

function switchButtonClickEffect() {
    switchButton.addEventListener("click", function () {
        if (main1Section.getBoundingClientRect().top < 0) {
            // main1Section.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({ top: 0, behavior: "smooth" });
            switchButtonBackground.style.transform = "rotate(0deg)";
        } 

        else {
            main2Section.scrollIntoView({ behavior: "smooth" });
            switchButtonBackground.style.transform = "rotate(180deg)";
        }
    });

    window.addEventListener("scroll", function () {

        if (main2Section.getBoundingClientRect().y + 75 < (window.innerHeight / 2)) {
            switchButtonBackground.style.transform = "rotate(180deg)";
        }

        else {
            switchButtonBackground.style.transform = "rotate(0deg)";
        
        }

    });
};

export function bodyGeneralEffects() {
    switchButtonClickEffect();
};