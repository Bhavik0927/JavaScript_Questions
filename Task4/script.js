const imageContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const left = document.querySelector('.carousel-button left');
const right = document.querySelector('.carousel-button right');

let currentIndex = 0;

const updateCrousel = () => {
    const imageWidth = images[0].clientWidth;
    imageContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

const showNextImage = () =>{
    currentIndex = (currentIndex + 1) % images.length;
    updateCrousel();
}

const showPrevImage = () =>{
    currentIndex = (currentIndex - 1) % images.length;
    updateCrousel();
}

right.addEventListener('click',showNextImage);
left.addEventListener('click',showPrevImage);

window.addEventListener('resize', updateCrousel);