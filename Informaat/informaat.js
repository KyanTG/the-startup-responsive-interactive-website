

const openButton = document.querySelector(".hamburger");


openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.toggle("nav-open"); }

const sluitButton = document.querySelector(".hamburger-open");


const BtnScrollTop = document.querySelector('.scroll-button')

BtnScrollTop.addEventListener('click', Scrolltop)

function Scrolltop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    } )
}


    