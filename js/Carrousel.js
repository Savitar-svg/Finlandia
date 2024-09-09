let indiceSlide = 0;
mostrarSlide(indiceSlide);

function moverSlide(n) {
    mostrarSlide(indiceSlide += n);
}

function mostrarSlide(n) {
    let slides = document.querySelectorAll('.slides img');

    if (n >= slides.length) {
        indiceSlide = 0;
    }
    if (n < 0) {
        indiceSlide = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });

    slides[indiceSlide].style.display = 'block';
    slides[indiceSlide].classList.add('active');
}
