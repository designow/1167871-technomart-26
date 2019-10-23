let modalclose = document.querySelector(".modal-close");
let btncontinue = document.querySelector(".continue");

//Закрытие формы добавления в корзину
modalclose.addEventListener("click", function(evt) {
    modalinfo.classList.remove("modal-show");
});

//Продолжить покупки формы добавления в корзину
btncontinue.addEventListener("click", function(evt) {
    modalinfo.classList.remove("modal-show");
});



//Открытие формы добавления в корзину
let modalinfo = document.querySelector(".modal-info"),
    buy = Array.prototype.slice.call(document.querySelectorAll(".buy")),
    onClickButton = function(evt) {
        evt.preventDefault(),
            document.querySelector(".modal-info").classList.add("modal-show")
    };

buy.forEach(function(evt) {
    evt.addEventListener("click", onClickButton)
});