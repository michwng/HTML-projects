/*
    project.js
        Author:         Michael Ng
        Date:           2021-11-09
        Last revised:   2021-11-09
        Description:    JavaScript for Homework 9
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
    clearActive();
    this.classList.add('active');
});

pause.addEventListener('click', function() {
    audio.pause();
    clearActive();
    this.classList.add('active');
});

volUp.addEventListener('click', function() {
    audio.volume = parseFloat(audio.volume + 0.1).toFixed(1);
});

volUp.addEventListener('mousedown', function() {
    this.classList.add('active');
});

volUp.addEventListener('mouseup', function() {
    this.classList.remove('active');
});

volDown.addEventListener('click', function() {
    audio.volume = parseFloat(audio.volume - 0.1).toFixed(1);
});

volDown.addEventListener('mousedown', function() {
    this.classList.add('active');
});

volDown.addEventListener('mouseup', function() {
    this.classList.remove('active');
});

function clearActive() {
    //get all elements whose class is 'audioControl'
    //returns an HTMLCollection, not an array,
    //so convert the HTMl collection to an array as well.
    let imgs = Array.from(document.getElementsByClassName('audioControl'));

    //remove 'active' class from each item in the array.
    imgs.forEach(function(item) {
        item.classList.remove('active');
    });
}



