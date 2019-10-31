let mapPopup = document.querySelector(".map-popup");
let mapLink = document.querySelector(".about-map-url");
let mapClose = mapPopup.querySelector(".map-close");
let feedback = document.querySelector(".feedback-block");
let form = feedback.querySelector(".feedback-block-content");
let login = feedback.querySelector("[name=username]");
let email = feedback.querySelector("[name=useremail]");
let usertext = feedback.querySelector("[name=usertext]");
let feedbackClose = feedback.querySelector(".feedback-close-btn");
let helpbutton = document.querySelector(".help-button");
let modalclose = document.querySelector(".modal-close");
let btncontinue = document.querySelector(".continue");

//Открытие карты
mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

//Открытие формы обратной связи
helpbutton.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
});

//Закрытие карты
mapClose.addEventListener("click", function(evt) {
    mapPopup.classList.remove("modal-show");
});

//Закрытие обратной связи
feedbackClose.addEventListener("click", function(evt) {
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
});


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

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value || !usertext.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});