
// For the hamburger menu for smaller screen sizes
function myFunction() {
    var hamburger = document.querySelector('hamburger');
    hamburger.classList.toggle("change");

    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

// For the roles
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                }
            })

            const closeButton = card.querySelector('.close');
            const circle = card.querySelector('.circle');
            const pTags = card.querySelectorAll('p');
            const name = pTags[0];
            const title = pTags[1];
            const info = card.querySelector('.info');
            const links = card.querySelector('.links');

            card.style.width = '92vw';
            card.style.minHeight = '76vh';
            card.style.backgroundColor = `#33333377`;
            card.style.marginRight = '0vh';

            name.style.fontSize = '4vh';
            name.style.fontFamily = 'sora-semibold';
            title.style.fontSize = '4vh';
            title.style.fontFamily = 'sora-semibold';
            circle.style.height = '30vh';
            circle.style.width = '30vh';

            info.style.display = 'flex';

            links.style.display = 'flex';

            closeButton.style.display = `flex`;

            closeButton.addEventListener('click', function (event) {
                card.style.width = 'auto';
                card.style.minHeight = 'auto';
                card.style.backgroundColor = '#ffffff';
                card.style.marginRight = '5vh';

                name.style.fontFamily = 'sora-regular';
                name.style.fontSize = '2vh';
                title.style.fontFamily = 'sora-regular';
                title.style.fontSize = '2vh';

                circle.style.height = '16vh';
                circle.style.width = '16vh';

                info.style.display = 'none';

                links.style.display = 'none';

                closeButton.style.display = 'none';

                cards.forEach(otherCard => {
                    otherCard.style.display = 'flex';
                });

                event.stopPropagation();
            })
        })
    })
})


// For the roles cards section
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.rolecardslistitem');
    
    cards.forEach(card => {
        card.addEventListener('click', function () {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                }
            })
            
            const closeButton = card.querySelector('.closeroles');
            const cardContainer = card.querySelector('.rolecontainer');
            const titleContainer = card.querySelector('.titlecontainer');
            const contentContainer = card.querySelector('.contentcontainer');
            
            card.style.width = "100%";

            cardContainer.style.justifyContent = "space-between";

            titleContainer.style.justifyContent = "space-between";

            contentContainer.style.display = "flex";

            closeButton.style.display = `flex`;

            closeButton.addEventListener('click', function (event) {

                card.style.width = "32%";

                cardContainer.style.justifyContent = "center";

                titleContainer.style.justifyContent = "center";

                contentContainer.style.display = "none";

                closeButton.style.display = "none";

                cards.forEach(otherCard => {
                    otherCard.style.display = 'flex';
                });

                event.stopPropagation();
            })
        })
    })
})