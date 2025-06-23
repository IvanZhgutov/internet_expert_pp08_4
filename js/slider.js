// Слайдер из 3 слайдов по 9 технологий
window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.tech-slide');
    const leftBtn = document.getElementById('simpleLeft');
    const rightBtn = document.getElementById('simpleRight');
    const indicators = document.querySelectorAll('.tech-slider-simple-indicator');
    let currentSlide = 0;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === idx) ? '' : 'none';
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
    }
    if (leftBtn && rightBtn && slides.length) {
        leftBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        rightBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        showSlide(currentSlide);
    }
}); 