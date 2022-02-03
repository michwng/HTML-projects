/*
    project.js
            Author:         Michael Ng
            Date:           2021-11-01
            Last revised:   2021-11-01
            Description:    JavaScript for Homework 8
*/

let btn = document.getElementById('ok'),    // modal button
    modal   = document.getElementById('modal'),     // modal
    audio   = document.getElementById('whiskey'),   // audio element
    play    = document.getElementById('play'),      // play button
    pause   = document.getElementById('pause'),     // pause button
    volUp   = document.getElementById('volUp'),     // volume up
    volDown = document.getElementById('volDown');   // volume down

// set initial volume
audio.volume = 0.3;

document.getElementById('whiskey').volume = 0.3; // set initial volume

btn.addEventListener('click', function() {
    modal.classList.add('hide');
});

play.addEventListener('click', function() {
    audio.play();
});

pause.addEventListener('click', function() {
    audio.pause();
});

volUp.addEventListener('click', function() {
    audio.volume = parseFloat(audio.volume + 0.1).toFixed(1);
});

volDown.addEventListener('click', function() {
    audio.volume = parseFloat(audio.volume - 0.1).toFixed(1);
});





