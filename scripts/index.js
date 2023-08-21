// TODO: Make this more efficient
// TODO: Refactor the code into different files and imports
import { navbarEffects } from "./header/navbar/navbar.js";
import { bodyGeneralEffects } from "./body/body.js";
import { main2Effects } from "./body/main2/main2.js";


const main1Section = document.querySelector(".main1");
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

function main1ImageSlideshow() {
    document.addEventListener("DOMContentLoaded", function () {

        let currentSlideIndex = 0;
    
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
};


// TODO: put all of the main2 stuff into a different file and import it





function mainLoop() {
    navbarEffects();
    bodyGeneralEffects();
    main2Effects();

    main1ImageSlideshow();
}

mainLoop();
