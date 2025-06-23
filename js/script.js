document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки, которые должны открывать модальное окно
    const openModalBtns = document.querySelectorAll('.js-open-consult-modal');
    const modalBackdrop = document.getElementById('consult-modal');

    // Если на странице нет модального окна, ничего не делаем
    if (!modalBackdrop) {
        return;
    }

    const closeModalBtn = modalBackdrop.querySelector('.modal-close-btn');

    // Функция для открытия модального окна
    function openModal(event) {
        event.preventDefault();
        modalBackdrop.style.display = 'flex';
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modalBackdrop.style.display = 'none';
    }

    // Назначаем обработчик на все кнопки открытия
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Закрываем окно по клику на крестик
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Закрываем окно по клику на затемненную область
    modalBackdrop.addEventListener('click', function(event) {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    // Закрываем окно по нажатию клавиши Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalBackdrop.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Слайдер из 3 слайдов по 9 технологий ---
    const slides = document.querySelectorAll('.tech-slide');
    const leftBtn = document.getElementById('simpleLeft');
    const rightBtn = document.getElementById('simpleRight');
    let currentSlide = 0;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === idx) ? '' : 'none';
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

    // Бургер-меню
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');
    function openBurger() {
        nav.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeBurger() {
        nav.classList.remove('open');
        document.body.style.overflow = '';
    }
    if (burger && nav) {
        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (nav.classList.contains('open')) {
                closeBurger();
            } else {
                openBurger();
            }
        });
        // Клик вне меню
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== burger) {
                closeBurger();
            }
        });
        // Закрытие по Esc
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                closeBurger();
            }
        });
        // Клик по ссылке в меню
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeBurger);
        });
    }
}); 