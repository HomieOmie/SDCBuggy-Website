import { main1Section, malice_front_sunny, bane_front_hill2,
        design_comp_group_12, vice_side_misty, bow_to_bane,
        vice_hill5_incoming, slides} from "./main1Constants.js";

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

export function main1Effects() {
    main1ImageSlideshow();
}