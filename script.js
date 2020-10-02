const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.slide').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'contact') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 844;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 844;
      }
    }
    
    console.log(imageIndex)
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

function aboutFunction() {
  if (imageIndex === 2) {
    imageIndex --;
    translateX +=844;
  } else  if (imageIndex === 3) {
    imageIndex -= 2;
    translateX += 1688;
  }
  console.log(imageIndex)
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
  console.log(imageIndex)
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
  console.log(imageIndex)
  carouselImages.style.transform = `translateX(${translateX}px)`;
}