const nav = document.querySelector('.navbar');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav)
    {
        nav.classList.add("fixed")
    }
    else nav.classList.remove("fixed")
}

window.addEventListener('scroll', fixNav)