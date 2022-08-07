// Mobile Navigation Menu
let menuButton = document.querySelector('.menu__btn');

menuButton.onclick = function () {
  mobileMenu();
}
function mobileMenu() {
  let menuList = document.querySelector('.menu__list');
  menuList.classList.toggle('menu__list--active');
}


// Gallery Slider 
let slideIndex = 1;
showSlides(slideIndex);

let slideArrowPrev = document.querySelector('.gallery__arrow-prev');
let slideArrowNext = document.querySelector('.gallery__arrow-next');

slideArrowPrev.onclick = function() {
  plusSlides(-1);
}
slideArrowNext.onclick = function() {
  plusSlides(1);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.gallery__slider');

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } 
  
  slides[slideIndex-1].style.display = "block";  
 }