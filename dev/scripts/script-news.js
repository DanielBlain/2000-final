const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const sliderContainer = document.querySelector(".slider-container");

const slideWidth = sliderContainer.clientWidth / 3;
let currentIndex = 0;

prevArrow.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSliderPosition();
});

nextArrow.addEventListener("click", () => {
    const maxIndex = Math.ceil(sliderContainer.scrollWidth / slideWidth) - 3;
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSliderPosition();
});

function updateSliderPosition() {
    const translateXValue = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}
