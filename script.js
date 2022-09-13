// hamburger menu animation
const menuBtn = document.querySelector(".menu-btn");

const sideMenuModal = document.querySelector(".side-menu");


menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle('open');
    sideMenuModal.classList.toggle('show-menu');
})

