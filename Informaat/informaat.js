
// Hamburger menu function for the sliding of the nav 

const openButton = document.querySelector(".hamburger");


openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.toggle("nav-open"); }

const sluitButton = document.querySelector(".hamburger-open");


// scrollbutton for going to the top of the page

const BtnScrollTop = document.querySelector('.scroll-button')

BtnScrollTop.addEventListener('click', Scrolltop)

function Scrolltop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    } )
}


    