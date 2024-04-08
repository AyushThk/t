let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slide-image-card');
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => {
        slide.classList.remove('active'); // Remove active class from all slides
    });

    slides[slideIndex].classList.add('active'); // Add active class to the current slide
}

function nextSlide() {
    slideIndex++;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    showSlide();
}

setInterval(nextSlide, 3000);

