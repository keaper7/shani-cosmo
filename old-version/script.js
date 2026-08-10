// все элементы с классом animate-on-scroll
const hiddenElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Если элемент появился в зоне видимости экрана
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // тогда добавляю класс, который запускает CSS-анимацию
        }
    });
}, {
    threshold: 0.1 // Сработает, когда хотя бы 10% блока покажется на экране
});

hiddenElements.forEach((el) => observer.observe(el));






document.addEventListener("DOMContentLoaded", function() {
    //  плавное появление элементов при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
        observer.observe(elem);
    });

    // параллакс для вотермарков 
    window.addEventListener('scroll', function() {
        const watermarks = document.querySelectorAll('.hero-watermark');
        let scrollPosition = window.pageYOffset;
        
        watermarks.forEach(wm => {
            wm.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.15}px))`;
        });
    });
});


// скролл вверх при перезагрузке страницы
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


function toggleAccordion(element) {
    const currentItem = element.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');

    // если нажимаю на уже открытый элемент, просто закрываю его
    if (currentItem.classList.contains('active')) {
        currentItem.classList.remove('active');
    } else {
        // иначе сначала закрываю все открытые вкладки
        allItems.forEach(item => {
            item.classList.remove('active');
        });

        // и только потом открываем ту, на которую нажали
        currentItem.classList.add('active');
    }
}