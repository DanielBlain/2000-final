let isVideoPlaying = false;

$(document).ready(function(){
    const videoPanel = document.getElementsByClassName("video-panel")[0];
    const videoElement = document.getElementsByTagName("video")[0];
    const videoPanelButton = document.getElementsByClassName("play-arrow")[0];

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

    /*
    $('.your-class').slick({
      setting-name: setting-value
    })*/
})