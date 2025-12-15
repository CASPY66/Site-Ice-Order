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



document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            // убираем active у всех
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // добавляем active нужным
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

});
