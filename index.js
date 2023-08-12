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
    setInterval(nextSlide, 2000);
});