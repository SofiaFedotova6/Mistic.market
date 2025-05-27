// Ожидаем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Получаем секцию fotos и изображения
    const foto2Section = document.getElementById('foto2');
    const foto4 = document.querySelector('#foto2 img[alt="Foto4"]');
    const foto3 = document.querySelector('#foto2 img[alt="Foto3"]');
    
    // Проверяем, что все элементы найдены
    if (!fotosSection || !foto4 || !foto3) {
        console.error('Не удалось найти необходимые элементы для анимации');
        return;
    }
    
    // Устанавливаем начальное состояние
    foto4.classList.add('foto-visible');
    foto3.classList.add('foto-hidden');
    
    // Функция для показа foto3 и скрытия foto4
    function showFoto3() {
        foto4.classList.remove('foto-visible');
        foto4.classList.add('foto-hidden');
        foto3.classList.remove('foto-hidden');
        foto3.classList.add('foto-visible');
    }
    
    // Функция для показа foto4 и скрытия foto3
    function showFoto4() {
        foto3.classList.remove('foto-visible');
        foto3.classList.add('foto-hidden');
        foto4.classList.remove('foto-hidden');
        foto4.classList.add('foto-visible');
    }
    
    // Обработчики событий для наведения мыши
    fotosSection.addEventListener('mouseenter', showFoto3);
    fotosSection.addEventListener('mouseleave', showFoto4);
    
    // Дополнительная обработка для touch-устройств
    let touchStarted = false;
    
    fotosSection.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (!touchStarted) {
            showFoto3();
            touchStarted = true;
            
            // Автоматически возвращаем к foto4 через 2 секунды
            setTimeout(function() {
                showFoto4();
                touchStarted = false;
            }, 2000);
        }
    });
    
    // Обработка клика для touch-устройств как альтернатива
    fotosSection.addEventListener('click', function(e) {
        e.preventDefault();
        if (foto4.classList.contains('foto-visible')) {
            showFoto3();
            
            // Возвращаем к foto4 через 2 секунды
            setTimeout(function() {
                showFoto4();
            }, 2000);
        }
    });
    
    console.log('Анимация изображений инициализирована');
});

// Дополнительная функция для отладки
function debugImageAnimation() {
    const foto4 = document.querySelector('#fotos img[alt="Foto4"]');
    const foto3 = document.querySelector('#fotos img[alt="Foto3"]');
    
    console.log('Foto4 classes:', foto4.className);
    console.log('Foto3 classes:', foto3.className);
    console.log('Foto4 opacity:', window.getComputedStyle(foto4).opacity);
    console.log('Foto3 opacity:', window.getComputedStyle(foto3).opacity);
}



// Получаем секцию sofs и изображения
const sofsSection = document.getElementById('sofs');
const foto8 = document.querySelector('#sofs img[alt="Foto8"]');
const foto7 = document.querySelector('#sofs img[alt="Foto7"]');

// Проверяем, что все элементы найдены
if (!sofsSection || !foto8 || !foto7) {
    console.error('Не удалось найти необходимые элементы для анимации');
    // Удаляем return, так как код не находится в функции
}

// Устанавливаем начальное состояние
foto8.classList.add('foto-visible');
foto7.classList.add('foto-hidden');

// Функция для показа foto7 и скрытия foto8
function showFoto7() {
    foto8.classList.remove('foto-visible');
    foto8.classList.add('foto-hidden');
    foto7.classList.remove('foto-hidden');
    foto7.classList.add('foto-visible');
}

// Функция для показа foto8 и скрытия foto7
function showFoto8() {
    foto7.classList.remove('foto-visible');
    foto7.classList.add('foto-hidden');
    foto8.classList.remove('foto-hidden');
    foto8.classList.add('foto-visible');
}

// Обработчики событий для наведения мыши
sofsSection.addEventListener('mouseenter', showFoto7);
sofsSection.addEventListener('mouseleave', showFoto8);

sofsSection.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (!touchStarted) {
        showFoto7();
        touchStarted = true;
        
        // Автоматически возвращаем к foto8 через 2 секунды
        setTimeout(function() {
            showFoto8();
            touchStarted = false;
        }, 2000);
    }
});

// Обработка клика для touch-устройств как альтернатива
sofsSection.addEventListener('click', function(e) {
    e.preventDefault();
    if (foto8.classList.contains('foto-visible')) {
        showFoto7();
        
        // Возвращаем к foto8 через 2 секунды
        setTimeout(function() {
            showFoto8(); // Исправлено: было showFoto7()
        }, 2000);
    }
});

console.log('Анимация изображений инициализирована');

// Дополнительная функция для отладки
function debugImageAnimation() {
    const foto8 = document.querySelector('#sofs img[alt="Foto8"]');
    const foto7 = document.querySelector('#sofs img[alt="Foto7"]');
    
    console.log('=== Debug Image Animation ===');
    console.log('Foto8 element:', foto8);
    console.log('Foto7 element:', foto7);
    
    if (foto8) {
        console.log('Foto8 classes:', foto8.className);
        console.log('Foto8 opacity:', window.getComputedStyle(foto8).opacity);
    }
    
    if (foto7) {
        console.log('Foto7 classes:', foto7.className);
        console.log('Foto7 opacity:', window.getComputedStyle(foto7).opacity);
    }
    console.log('=============================');
}


// Получаем секцию picture и изображения
const pictureSection = document.getElementById('picture');
const foto10 = document.querySelector('#picture img[alt="Foto10"]');
const foto9 = document.querySelector('#picture img[alt="Foto9"]');

// Проверяем, что все элементы найдены
if (!pictureSection || !foto10 || !foto9) {
    console.error('Не удалось найти необходимые элементы для анимации');
    console.error('pictureSection:', pictureSection);
    console.error('foto10:', foto10);
    console.error('foto9:', foto9);
    // Прерываем выполнение, если элементы не найдены
    throw new Error('Необходимые элементы для анимации не найдены');
}

// Устанавливаем начальное состояние
foto10.classList.add('foto-visible');
foto10.classList.remove('foto-hidden');
foto9.classList.add('foto-hidden');
foto9.classList.remove('foto-visible');

// Функция для показа foto9 и скрытия foto10
function showFoto9() {
    console.log('Переключение на foto9');
    foto10.classList.remove('foto-visible');
    foto10.classList.add('foto-hidden');
    foto9.classList.remove('foto-hidden');
    foto9.classList.add('foto-visible');
}

// Функция для показа foto10 и скрытия foto9
function showFoto10() {
    console.log('Переключение на foto10');
    foto9.classList.remove('foto-visible');
    foto9.classList.add('foto-hidden');
    foto10.classList.remove('foto-hidden');
    foto10.classList.add('foto-visible');
}

// Обработчики событий для наведения мыши
pictureSection.addEventListener('mouseenter', showFoto9);
pictureSection.addEventListener('mouseleave', showFoto10);

// Дополнительная обработка для touch-устройств
let touchStarted = false;

pictureSection.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (!touchStarted) {
        showFoto9();
        touchStarted = true;
        
        // Автоматически возвращаем к foto10 через 2 секунды
        setTimeout(function() {
            showFoto10();
            touchStarted = false;
        }, 2000);
    }
});

// Обработка клика для touch-устройств как альтернатива
pictureSection.addEventListener('click', function(e) {
    e.preventDefault();
    if (foto10.classList.contains('foto-visible')) {
        showFoto9();
        
        // Возвращаем к foto10 через 2 секунды
        setTimeout(function() {
            showFoto10();
        }, 2000);
    }
});

console.log('Анимация изображений инициализирована');

// Функция для отладки
function debugImageAnimation() {
    console.log('=== Debug Image Animation ===');
    console.log('Picture section:', pictureSection);
    console.log('Foto10 element:', foto10);
    console.log('Foto9 element:', foto9);
    
    if (foto10) {
        console.log('Foto10 classes:', foto10.className);
        console.log('Foto10 opacity:', window.getComputedStyle(foto10).opacity);
        console.log('Foto10 display:', window.getComputedStyle(foto10).display);
    }
    
    if (foto9) {
        console.log('Foto9 classes:', foto9.className);
        console.log('Foto9 opacity:', window.getComputedStyle(foto9).opacity);
        console.log('Foto9 display:', window.getComputedStyle(foto9).display);
    }
    console.log('=============================');
}

// Экспортируем функцию отладки в глобальную область для использования в консоли
window.debugImageAnimation = debugImageAnimation;
