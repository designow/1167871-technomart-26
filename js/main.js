        let mapPopup = document.querySelector(".map-popup");
        let mapLink = document.querySelector(".about__map__url");
        let mapClose = mapPopup.querySelector(".mapClose");
        let feedback = document.querySelector(".feedback-block");
        let feedbackClose = feedback.querySelector(".feedback-close-btn");
        let helpbutton = document.querySelector(".help-button");
        let modalclose = document.querySelector(".modal-close");
        let btncontinue = document.querySelector(".continue");

         
          //Открытие карты
          mapLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.add("modal-show");
          });

          //Открытие формы обратной связи
          helpbutton.addEventListener("click", function (evt) {
          evt.preventDefault();
          feedback.classList.add("modal-show");
          });

          //Закрытие карты
          mapClose.addEventListener("click", function (evt) {
               mapPopup.classList.remove("modal-show");
          });

          //Закрытие карты
          feedbackClose.addEventListener("click", function (evt) {
               feedback.classList.remove("modal-show");
          });
          

          //Закрытие формы добавления в корзину
          modalclose.addEventListener("click", function (evt) {
               modalinfo.classList.remove("modal-show");
          });

          //Продолжить покупки формы добавления в корзину
          btncontinue.addEventListener("click", function (evt) {
               modalinfo.classList.remove("modal-show");
          });


        
        //Открытие формы добавления в корзину
        let modalinfo = document.querySelector(".modal-info"),
        buy = Array.prototype.slice.call(document.querySelectorAll(".buy")),
        onClickButton = function(evt){
          evt.preventDefault(),
        document.querySelector(".modal-info").classList.add("modal-show")};
        
        buy.forEach(function(evt){
          evt.addEventListener("click", onClickButton)
        });
