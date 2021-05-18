var slideIndex = 1;

var myTimer;

var slideshowContainer;

//Credit: How To Build a Carousel With Automatic and Manual Controls by Matthew Croak, betterpublishing.pub for teaching me how this is done.

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
        moveSlides(1)
    }, 3000);
    slideShowContainer = document.getElementsByClassName("opening slides")[0];
})

function moveSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { moveSlides(n + 2) }, 3000);
    } else { myTimer = setInterval(function () { moveSlides(n + 1) }, 3000); }

}
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { moveSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i
    var slides = document.getElementsByClassName("opening slides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) { slideIndex = 1 }
    console.log(slides.length);
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


