// Дождаться загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const dragon1Section = document.getElementById('Dragon1');
    const dragonImg = dragon1Section.querySelector('img[alt="Dragon1"]');
    const infoImg = dragon1Section.querySelector('img[alt="info1"]');

    // Добавляем обработчики событий для более точного контроля
    dragon1Section.addEventListener('mouseenter', function() {
        dragonImg.style.opacity = '0';
        infoImg.style.opacity = '1';
    });

    dragon1Section.addEventListener('mouseleave', function() {
        dragonImg.style.opacity = '1';
        infoImg.style.opacity = '0';
    });

    // Предзагрузка изображений для избежания задержек
    const preloadImg1 = new Image();
    const preloadImg2 = new Image();
    preloadImg1.src = 'images/Dragon1.png';
    preloadImg2.src = 'images/info1.png';

    console.log('Dragon1 интерактив загружен');
});

 // Добавляем обработчики событий для более точного контроля
 dragon2Section.addEventListener('mouseenter', function() {
    dragonImg.style.opacity = '0';
    infoImg.style.opacity = '1';
});

dragon2Section.addEventListener('mouseleave', function() {
    dragonImg.style.opacity = '1';
    infoImg.style.opacity = '0';
});

// Предзагрузка изображений для избежания задержек
const preloadImg1 = new Image();
const preloadImg2 = new Image();
preloadImg1.src = 'images/Dragon2.png';
preloadImg2.src = 'images/info2.png';

console.log('Dragon2 интерактив загружен');

// Добавляем обработчики событий для более точного контроля
dragon3Section.addEventListener('mouseenter', function() {
    dragonImg.style.opacity = '0';
    infoImg.style.opacity = '1';
});

dragon3Section.addEventListener('mouseleave', function() {
    dragonImg.style.opacity = '1';
    infoImg.style.opacity = '0';
});

// Предзагрузка изображений для избежания задержек
const preloadImg1 = new Image();
const preloadImg2 = new Image();
preloadImg1.src = 'images/Dragon3.png';
preloadImg2.src = 'images/info3.png';

console.log('Dragon3 интерактив загружен');

