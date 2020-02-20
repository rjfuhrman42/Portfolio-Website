const nav = document.querySelector('.navbar');
const projects = document.querySelectorAll('.project');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav)
    {
        nav.classList.add("fixed")
    }
    else nav.classList.remove("fixed")
}

// function hoverOver(e) {
//    e.target.classList.add('hovered')
   
// }

// function hoverOut(e) {
//     e.target.classList.remove('hovered')
    
//  } 


// projects.forEach(project => project.addEventListener('mouseover', hoverOver))
// projects.forEach(project => project.addEventListener('mouseleave', hoverOut))
window.addEventListener('scroll', fixNav)