'use strict';
import './swipers.js';
import './language.js';

const burgerLogo = document.querySelector('.header__burger-logo');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger__close');
const submitButton = document.querySelector('#submitButton');
const body = document.getElementById('body');
const burgerItems = document.querySelectorAll('.burger-item-close')

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

// Burger menu logic
burgerLogo.addEventListener('click',() => {
  burger.classList.add('active');
  body.style.overflow ='hidden'
})

burgerClose.addEventListener('click',() => {
  burger.classList.remove('active');
  body.style.overflow ='auto'
})

burgerItems.forEach(elem => elem.addEventListener('click', () => {
  burger.classList.remove('active');
  body.style.overflow ='auto';
}))

document.addEventListener("DOMContentLoaded", function() {
  const blocks = document.querySelectorAll(".block, .block-right");
  console.log(1)
  function handleScroll() {
    
      blocks.forEach(block => {
          const blockPosition = block.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (blockPosition < screenPosition) {
            block.classList.add("visible");
          } else {
            block.classList.remove("visible");
          }
      });
  }

  window.addEventListener("scroll",handleScroll);
  handleScroll()
});
