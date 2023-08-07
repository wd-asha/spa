let filterPrice = document.querySelector("#filter-price");
let filterInput = document.querySelector("#filter-input");
let filterBtn = document.querySelector("#filter-btn");
let shopItems = document.querySelectorAll(".shop-item");
let countItems = document.querySelector("#count__items");

filterInput.value = 60;
countItems.innerHTML = "1-18";

filterInput.addEventListener('input', function () {
    filterPrice.textContent = filterInput.value;
});

filterBtn.addEventListener('click', function () {

    visibleItens = 0;
    shopItems.forEach(function (item) {
        let price = item.dataset.price;
        if(price >= filterInput.value) {
            item.classList.add("hide");
       }else{
            item.classList.remove("hide");
            visibleItens = visibleItens + 1;
        }
    });
    countItems.innerHTML = visibleItens;
});
