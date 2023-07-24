let isVideoPlaying = false;

$(document).ready(function(){
    const videoPanel = $(".video-panel")[0];
    const videoElement = $("video")[0];
    const videoPanelButton = $(".play-arrow")[0];

    $('.news-slick').slick({
        respondTo: 'window',
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

    videoPanel.onclick = (event) => {
        if (!isVideoPlaying) {
            videoElement.play();
            videoPanelButton.style.display="none";
        }
        else {
            videoElement.pause();
            videoPanelButton.style.display="block";
        }
        isVideoPlaying = !isVideoPlaying;
    };
})