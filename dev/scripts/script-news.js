const swiper = document.querySelector('.news-panel').swiper;

$(document).ready(function() {
    const newsSwiper = new Swiper('.news-panel', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
        },
    });
})