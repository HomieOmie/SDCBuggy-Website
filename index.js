function myFunction() {
    var hamburger = document.querySelector('hamburger');
    hamburger.classList.toggle("change");

    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}