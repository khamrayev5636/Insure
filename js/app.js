let elBurgerBtn = document.querySelector(".js__open-btn");
let elBody = document.querySelector("body");

elBurgerBtn.addEventListener("click" , function(){
    elBurgerBtn.closest(".header").classList.toggle("shownav");
})

elBurgerBtn.addEventListener("click" , function(){
    elBody.classList.toggle("hiddin");
})


