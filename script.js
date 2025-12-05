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