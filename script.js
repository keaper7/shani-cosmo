// Находим все элементы с классом animate-on-scroll
const hiddenElements = document.querySelectorAll('.animate-on-scroll');

// Создаем "наблюдателя"
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Если элемент появился в зоне видимости экрана
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Добавляем класс, который запускает CSS-анимацию
        }
    });
}, {
    threshold: 0.1 // Сработает, когда хотя бы 10% блока покажется на экране
});

// Указываем наблюдателю следить за каждым элементом из списка
hiddenElements.forEach((el) => observer.observe(el));






document.addEventListener("DOMContentLoaded", function() {
    // 1. Плавное появление элементов при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Элемент начнет появляться, когда на экране покажется 15% его высоты
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Если хочешь, чтобы анимация срабатывала только один раз, раскомментируй строку ниже:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
        observer.observe(elem);
    });

    // 2. Параллакс для вотермарков (чтобы слова BACKGROUND двигались)
    window.addEventListener('scroll', function() {
        const watermarks = document.querySelectorAll('.hero-watermark');
        let scrollPosition = window.pageYOffset;
        
        watermarks.forEach(wm => {
            wm.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.15}px))`;
        });
    });
});


// Принудительный скролл вверх при перезагрузке страницы
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


function toggleAccordion(element) {
    const currentItem = element.parentElement; // Находим сам блок услуги (.accordion-item)
    const allItems = document.querySelectorAll('.accordion-item');

    // Если мы нажимаем на уже открытый элемент — просто закрываем его
    if (currentItem.classList.contains('active')) {
        currentItem.classList.remove('active');
    } else {
        // Иначе: сначала закрываем ВООБЩЕ ВСЕ открытые вкладки
        allItems.forEach(item => {
            item.classList.remove('active');
        });

        // И только потом открываем ту, на которую нажали
        currentItem.classList.add('active');
    }
}