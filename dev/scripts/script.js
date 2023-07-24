let isVideoPlaying = false;

$(document).ready(function(){
    const videoPanel = $(".video-panel")[0];
    const videoElement = $("video")[0];
    const videoPanelButton = $(".play-arrow")[0];

    $('.news-slick').slick({
        autoplay: "true",
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2
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