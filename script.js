const nav = document.querySelector('.navbar');
const test = document.querySelectorAll('.test');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav)
    {
        nav.classList.add("fixed")
    }
    else nav.classList.remove("fixed")
}

function hoverOver(e) {

    test.forEach(item => {
        if(item === e.target) item.classList.add('hovered')
    })
   
}

function hoverOut(e) {
    test.forEach(item => {
        if(item === e.target) item.classList.remove('hovered')
    })
   
 } 

test.forEach(test=> test.addEventListener('mouseover', hoverOver))
test.forEach(test=> test.addEventListener('mouseleave', hoverOut))
window.addEventListener('scroll', fixNav)