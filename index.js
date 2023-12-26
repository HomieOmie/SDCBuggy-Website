function myFunction() {
    var hamburger = document.querySelector('hamburger');
    hamburger.classList.toggle("change");

    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

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

            card.style.width = '92vw';
            card.style.minHeight = '76vh';
            card.style.backgroundColor = `#33333377`;
            card.style.marginRight = '0vh';

            closeButton.style.display = `flex`;

            closeButton.addEventListener('click', function (event) {
                card.style.width = 'auto';
                card.style.minHeight = 'auto';
                card.style.backgroundColor = '#ffffff';
                card.style.marginRight = '5vh';
                closeButton.style.display = 'none';

                cards.forEach(otherCard => {
                    otherCard.style.display = 'flex';
                });

                event.stopPropagation();
            })
        })
    })
})