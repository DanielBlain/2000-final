"use strict"

function closeVideoModal() {
    document.getElementsByTagName("video")[0].pause();
    document.getElementById("videoModal").style.display = "none";
}

function openVideoModal() {
    document.getElementById("videoModal").style.display = "inline";
}
