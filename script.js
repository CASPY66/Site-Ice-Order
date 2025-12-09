console.log("Ice Order site loaded ❄️");

// --- Бургер меню ---
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

// --- Категории ---
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Тут можно фильтровать товары по категории
    });
});


let isAdmin = false;

function loginAdmin(key) {
    const secret = 'casp'; // твой секретный ключ
    if (key === secret) {
        isAdmin = true;
        console.log('Вы вошли как админ!');
    } else {
        console.log('Неверный ключ!');
    }
}

function setPrice(productId, newPrice) {
    if (!isAdmin) {
        console.log('Доступ запрещён!');
        return;
    }

    // здесь отправка на сервер, пока просто вывод в консоль
    console.log(`Цена товара ${productId} изменена на ${newPrice}`);
}

// Кнопки с конкретными id
document.getElementById('cases-donate').addEventListener('click', () => {
    window.location.href = '/clases/category/case.html';
});

document.getElementById('priveleges').addEventListener('click', () => {
    window.location.href = '/index.html';
});

document.getElementById('misc').addEventListener('click', () => {
    window.location.href = '/clases/category/others.html';
});

// Все кнопки с атрибутом data-url
document.querySelectorAll('.go-page').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.url;
        if (url) window.location.href = url;
    });
});