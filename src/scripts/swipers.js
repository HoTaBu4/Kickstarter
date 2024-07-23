'use strict';
import Swiper from 'swiper';

import { Navigation, Pagination , Autoplay} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

let firstSwiperInstance = null;
let secondSwiperInstanse = null;


// Initialize first Swiper instance
function initializeFirstSwiper() {
  if (!firstSwiperInstance) {
    firstSwiperInstance = new Swiper('.first-swiper', {
      spaceBetween: 30,
      loop: true,
      speed: 500,
      modules: [Autoplay],
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

// Initialize second Swiper instance
function initializeSecondSwiper() {
  if (!secondSwiperInstanse) {
    secondSwiperInstanse =  new Swiper('.second-swiper', {
      spaceBetween: 30,
      loop: true,
      speed: 500,
      modules: [Navigation, Pagination],
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
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return `<div class='swiper-active-page'>0` + current + '</div>' + 
            `<div class='swiper-page-between'>/</div>` +
            `<div class='swiper-total-page'>0` + total + `</div>`;
        },
      },
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

//Destroy second Swiper instance
function destroySecondSwiper() {
  if (secondSwiperInstanse) {
    secondSwiperInstanse.destroy(true, true);
    secondSwiperInstanse = null;
  }
}

// Update Swiper instances based on viewport width
function updateStylesBasedOnWidth() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth <= 744) {
    initializeFirstSwiper();
    initializeSecondSwiper();
  } else if (viewportWidth <= 900) {
    initializeSecondSwiper();
    destroyFirstSwiper()
  } else if (viewportWidth >= 900) {
    destroySecondSwiper()
  } else {
    destroyFirstSwiper();
    destroySecondSwiper();
  }
}

document.addEventListener('DOMContentLoaded',updateStylesBasedOnWidth);

window.addEventListener('resize', updateStylesBasedOnWidth);

