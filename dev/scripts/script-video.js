"use strict"

function closeVideoModal() {
    document.getElementsByTagName("video")[0].pause();
    document.getElementById("videoModal").style.display = "none";
}

function openVideoModal() {
    document.getElementById("videoModal").style.display = "inline";
}




$('.news-slick').slick({
    respondTo: 'window',
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 500,
            settings: 'unslick'
        }
    ],
})

