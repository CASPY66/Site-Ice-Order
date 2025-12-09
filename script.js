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
    const secret = 'adm-casp-2010'; // хранить в ENV на сервере
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

    fetch('/api/update-price', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: productId, price: newPrice })
        })
        .then(res => res.json())
        .then(data => console.log('Цена обновлена', data))
        .catch(err => console.error(err));
}