const carousel = document.querySelector(".image_container");
const carouselImages = document.querySelectorAll(".image_container img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");


//create a counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', function() {
    if (counter >= carouselImages.length -1) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

//eventlistener for when transition ends to reset counter
carousel.addEventListener('transitionend', ()=> {
    if (carouselImages[counter].id === "firstImg") {
        carousel.style.transition = "none";
        counter = carouselImages.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

carousel.addEventListener('transitionend', ()=> {
    if (carouselImages[counter].id === "lastImg") {
        carousel.style.transition = "none";
        counter = carouselImages.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});