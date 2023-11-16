// index.js

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Function to find the closest section to the top of the viewport
    function findClosestSection() {
        let minDistance = Number.MAX_SAFE_INTEGER;
        let targetSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
                minDistance = distance;
                targetSection = section;
            }
        });

        return targetSection;
    }

    // Function to scroll to the closest section
    function scrollToClosestSection() {
        const targetSection = findClosestSection();

        if (targetSection) {
            // Special case: If scrolling to #main, scroll to #header instead
            if (targetSection.id === 'main') {
                document.getElementById('header').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            } else {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    }

    // Scroll event listener
    window.addEventListener('scroll', function () {
        clearTimeout(this.scrollTimeout);

        // Use a timeout to delay the snapping effect slightly
        this.scrollTimeout = setTimeout(scrollToClosestSection, 50);
    });
});
