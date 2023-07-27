'use strict';
// Write your JavaScript here...
$(document).ready(function(){
    $('.shop-by-slide').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        // dots: true,

        responsive: [
            {
              breakpoint: 1315,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4

              }
            },
            {
              breakpoint: 815,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
               
              }
            },
            {
              breakpoint: 450,
              settings: "unslick"
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
         ]
        });        
});
      