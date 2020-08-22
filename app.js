// Need to make a function that gets rid of the preloader

"use strict"

window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});