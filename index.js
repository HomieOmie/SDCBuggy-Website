// TODO: Make this more efficient

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const switchButton = document.getElementById("carrotImage");
    const main1Section = document.querySelector(".main1");
    const main2Section = document.querySelector(".main2");
    const switchButtonBackground = document.querySelector(".scroll-button-background");

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

});