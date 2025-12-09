console.log("Ice Order site loaded ❄️");

const sliderItems = document.querySelectorAll(".slide_item");
const infoBox = document.getElementById("item_info");

sliderItems.forEach(item => {
    item.addEventListener("click", () => {

        sliderItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        let info = item.getAttribute("data-info");
        infoBox.innerHTML = info;
    });
});

let isAdmin = false;

function loginAdmin(key) {
    const secret = 'мой_секретный_ключ'; // хранить в ENV на сервере
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