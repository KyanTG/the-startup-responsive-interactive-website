
const BtnScrollTop = document.querySelector('.scroll-button')

BtnScrollTop.addEventListener('click', Scrolltop)

function Scrolltop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    } )
}
    