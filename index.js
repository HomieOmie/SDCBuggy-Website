// TODO: Make this more efficient
// TODO: Refactor the code into different files and imports

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

    let currentSlideIndex = 0;

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

    const malice_front_sunny = {
        "image-url": "../images/media/malice-front-sunny.jpg"
    };

    const bane_front_hill2 = {
        "image-url": "../images/media/bane-front-hill2.jpg"
    };

    const design_comp_group_12 = {
        "image-url": "../images/media/design-comp-group-12.jpg"
    };

    const vice_side_misty = {
        "image-url": "../images/media/vice-side-misty.jpg"
    };

    const bow_to_bane = {
        "image-url": "../images/media/bow-to-bane.jpg"
    };

    const vice_hill5_incoming = {
        "image-url": "../images/media/vice-hill5-incoming.jpg"
    };

    const slides = [malice_front_sunny, bane_front_hill2, design_comp_group_12,
                    vice_side_misty, bow_to_bane, vice_hill5_incoming]

    function showSlide(index) {
        console.log(slides[index]["image-url"], slides[index]["properties"]);
        main1Section.style.backgroundImage = `url(${slides[index]["image-url"]})`;
    }
    
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }
    
      // Start the slideshow
    showSlide(currentSlideIndex);
    setInterval(nextSlide, 10000);
});

const main2Team = document.querySelector(".main2-team");
const main2Roles = document.querySelector(".main2-roles");
const main2Events = document.querySelector(".main2-events");
const main2History = document.querySelector(".main2-history");
const main2Alumni = document.querySelector(".main2-alumni");

function main2TeamHoverEffect() {

    main2Team.addEventListener("mouseenter", function () {
        others = [main2Roles, main2Events, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "blur(.35vw)";
        }
    });
    
    main2Team.addEventListener("mouseleave", function () {
        others = [main2Roles, main2Events, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "none";
        }
    });
};

function main2RolesHoverEffect() {

    main2Roles.addEventListener("mouseenter", function () {
        others = [main2Team, main2Events, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "blur(.35vw)";
        }
    });
    
    main2Roles.addEventListener("mouseleave", function () {
        others = [main2Team, main2Events, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "none";
        }
    });
};

function main2EventsHoverEffect() {

    main2Events.addEventListener("mouseenter", function () {
        others = [main2Team, main2Roles, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "blur(.35vw)";
        }
    });
    
    main2Events.addEventListener("mouseleave", function () {
        others = [main2Team, main2Roles, main2History, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "none";
        }
    });
};

function main2HistoryHoverEffect() {

    main2History.addEventListener("mouseenter", function () {
        others = [main2Team, main2Roles, main2Events, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "blur(.35vw)";
        }
    });
    
    main2History.addEventListener("mouseleave", function () {
        others = [main2Team, main2Roles, main2Events, main2Alumni]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "none";
        }
    });
};

function main2AlumniHoverEffect() {

    main2Alumni.addEventListener("mouseenter", function () {
        others = [main2Team, main2Roles, main2Events, main2History]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "blur(.35vw)";
        }
    });
    
    main2Alumni.addEventListener("mouseleave", function () {
        others = [main2Team, main2Roles, main2Events, main2History]
        for (let i = 0; i < others.length; i++){
            others[i].style.filter = "none";
        }
    });
};

function main2HoverEffects() {
    main2TeamHoverEffect();
    main2RolesHoverEffect();
    main2EventsHoverEffect();
    main2HistoryHoverEffect();
    main2AlumniHoverEffect();
};

main2HoverEffects();

