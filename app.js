const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//Typewriter text effect
var i = 0;
var introText = "Hi, I'm Simon"
var speed = 200;


function typewriter() {
    if(i<introText.length) {
        document.getElementById("intro__header").innerHTML += (introText.charAt(i) + '<span class="cursor__blink"></span>');
        i++;
        setTimeout(typewriter, speed)
    }
}
