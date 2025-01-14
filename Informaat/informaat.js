
const BtnScrollTop = document.querySelector('.scrollbutton')

BtnScrollTop.addEventListener('click', Scrolltop)

function Scrolltop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    } )
}
