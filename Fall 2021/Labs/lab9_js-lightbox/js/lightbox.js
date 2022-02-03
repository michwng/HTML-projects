/**
 *  Author:          Michael Ng
 *  Date:           2021-10-27
 *  Last Revised:   2021-10-27
 *  Description:    JS for lightbox project
 */

// Create slideIndex and set it to 1
let slideIndex = 1;

// Pack this into a variable.
const numSlides = document.getElementsByClassName('slide').length;

// Open the modal
function openModal() {
    document.getElementById('modal').classList.remove('fade-out');
    document.getElementById('modal').classList.add('fade-in');
}

// Close the modal
function closeModal() {
    document.getElementById('modal').classList.remove('fade-in');
    document.getElementById('modal').classList.add('fade-out');
}

//Increment slideIndex (and provide wrapping first -> last; last -> first)
//Displays next/previous images.
function plusSlides(n) {
    if ((slideIndex + n) > numSlides) {
        slideIndex = 1;
    } else if ((slideIndex + n) < 1){
        slideIndex = numSlides
    } else {
        slideIndex += n;
    }
    currentSlide(slideIndex);
}

//Identifies the current slide and shows it.
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}



// show the slides.
function showSlides(n) {
    let i,
        slides = document.getElementsByClassName('slide'),
        thumbs = document.getElementsByClassName('thumb'),
        captionText = document.getElementById('caption');
        
    //hide all of the slides
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    //eliminate the active class from all slides
    for(i = 0; i < slides.length; i++) {
        thumbs[i].className.replace('active', '');
    }
     
    //displays current slide and set as active. 
    //Also displays the slide's caption.
    slides[n-1].style.display = 'block';
    thumbs[n-1].classList.add('active');
    captionText.innerHTML = thumbs[slideIndex - 1].alt;
}

// close the modal if user clicks anywhere other than an image or controls
document.addEventListener('click', function(e) {
    if(e.target === document.getElementById('modal')) {
        closeModal();
    }
});



