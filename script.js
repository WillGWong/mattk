const carouselImages = document.querySelector('.carousel__images');
const numberOfImages = document.querySelectorAll('.slide').length;
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
}

function workFunction() {
  if (imageIndex === 1) {
    imageIndex ++;
    translateX -=844;
  } else  if (imageIndex === 3) {
    imageIndex --;
    translateX += 844;
  }
  console.log(carouselImages)
  carouselImages.style.transform = `translateX(${translateX}px)`;
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
}