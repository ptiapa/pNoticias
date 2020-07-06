document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});
ScrollReveal().reveal('.footer-links',{delay:500});
ScrollReveal().reveal('.footer',{delay:500});


/*
let btnMenu = document.getElementById('btn-menu');
let Menu = document.getElementById('nav-menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    Menu.classList.toggle('show')
}

*/