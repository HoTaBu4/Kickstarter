'use strict';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const burgerLogo = document.querySelector('.header__burger-logo');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger__close');
// const nextButton = document.querySelector('.swiper-button-next');
// const prevButton = document.querySelector('.swiper-button-prev');
const submitButton = document.querySelector('#submitButton');

let firstSwiperInstance = null;
let secondSwiperInstanse = null;


document.getElementById("FormData").addEventListener("submit", function (e) {
  e.preventDefault();
});

const handlesSetEmptyFields = () => {
  const input = document.querySelector(".footer__form--input");
  const textarea = document.querySelector(".footer__form--textarea");

  input.value = "";
  textarea.value = "";
};

if (submitButton) {
  submitButton.addEventListener("click", () => {
    setTimeout(handlesSetEmptyFields, 1000);
  });
}

// Burger menu toggle
burgerLogo.addEventListener('click',() => {
  burger.classList.add('active');
})

burgerClose.addEventListener('click',() => {
  burger.classList.remove('active');
})

// Initialize first Swiper instance
function initializeFirstSwiper() {
  if (!firstSwiperInstance) {
    firstSwiperInstance = new Swiper('.first-swiper', {
      spaceBetween: 30,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
      }
    });
  }
}

// function updatePagination() {
//   var currentSlide = secondSwiperInstanse.realIndex + 1; // Swiper's realIndex starts from 0
//   var totalSlides = secondSwiperInstanse.slides.length;

//   var paginationInfo = document.querySelector('.swiper-pagination-info');
//   if (!paginationInfo) {
//       paginationInfo = document.createElement('div');
//       paginationInfo.className = 'swiper-pagination-info';
//       secondSwiperInstanse.pagination.el.appendChild(paginationInfo);
//   }
//   paginationInfo.innerHTML = 'Slide ' + currentSlide + ' of ' + totalSlides;
// }

// Initialize second Swiper instance
function initializeSecondSwiper() {
  if (!secondSwiperInstanse) {
    secondSwiperInstanse =  new Swiper('.second-swiper', {
      spaceBetween: 30,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"/' + (index + 1) + '</span>';
      },
      },
      // on: {
      //   slideChange: function () {
      //     updatePagination();
      //   },
      // },
    });
  }
}

// Destroy first Swiper instance
function destroyFirstSwiper() {
  if (firstSwiperInstance) {
    firstSwiperInstance.destroy(true, true);
    firstSwiperInstance = null;
  }
}


// Destroy second Swiper instance
function destroySecondSwiper() {
  if (secondSwiperInstanse) {
    secondSwiperInstanse.destroy(true, true);
    secondSwiperInstanse = null;
  }
}

// nextButton.addEventListener('click',() =>{firstSwiperInstance.slideNext()})
// prevButton.addEventListener('click',() =>{firstSwiperInstance.slidePrev()})

// Update Swiper instances based on viewport width
function updateStylesBasedOnWidth() {
  const viewportWidth = window.innerWidth;
  // initializeFirstSwiper();

  console.log(firstSwiperInstance)
  
  if (viewportWidth <= 744) {
    initializeFirstSwiper();
    initializeSecondSwiper();
  } else if (viewportWidth <= 1440) {
    destroyFirstSwiper();
    initializeSecondSwiper()
  } else {
    destroyFirstSwiper();
    destroySecondSwiper();
  }
}

document.addEventListener('DOMContentLoaded',updateStylesBasedOnWidth);

window.addEventListener('resize', updateStylesBasedOnWidth);

// updatePagination(); 

// secondSwiperInstanse.on('paginationUpdate', function () {
//   updatePagination();
// });
