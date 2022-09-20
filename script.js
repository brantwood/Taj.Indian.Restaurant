// hamburger menu animation
const menuBtn = document.querySelector(".menu-btn");

const sideMenuModal = document.querySelector(".side-menu");

// Function toggles the class to an off-screen modal window making it visible
menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle('open');
    sideMenuModal.classList.toggle('show-menu');
})

