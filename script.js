const carouselImages = document.querySelector('.carousel__images');
const numberOfImages = document.querySelectorAll('.slide').length;
const aboutNav = document.querySelector('#about')
const workNav = document.querySelector('#work')
const contactNav = document.querySelector('#contact')

let imageIndex = 1;
let translateX = 0;

function aboutFunction() {
  if (imageIndex === 2) {
    imageIndex --;
    translateX +=844;
  } else  if (imageIndex === 3) {
    imageIndex -= 2;
    translateX += 1688;
  }
  carouselImages.style.transform = `translateX(${translateX}px)`;
  aboutNav.style.color = 'gray'
  workNav.style.color ='black'
  contactNav.style.color = 'black'
}

function workFunction() {
  if (imageIndex === 1) {
    imageIndex ++;
    translateX -=844;
  } else  if (imageIndex === 3) {
    imageIndex --;
    translateX += 844;
  }
  carouselImages.style.transform = `translateX(${translateX}px)`;
  aboutNav.style.color = 'black'
  workNav.style.color ='gray'
  contactNav.style.color = 'black'
}

function contactFunction() {
  if (imageIndex === 1) {
    imageIndex += 2;
    translateX -= 1688;
  } else  if (imageIndex === 2) {
    imageIndex ++;
    translateX -= 844;
  }
  carouselImages.style.transform = `translateX(${translateX}px)`;
  aboutNav.style.color = 'black'
  workNav.style.color ='black'
  contactNav.style.color = 'gray'
}