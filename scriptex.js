//icon bar//
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let selections =document.quesrySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    selections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = secgetAttribute('id');

        if(top>=offset && top<offset +height) {
            navlinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+ ']').classList.add('active');
            });
           /* active selections for animation on scroll*/
           sec.classList.add('show-animate');
           sec.classList.add('show-animate');
        }
        /*if want to use animation that repeats on scroll use this*/
        else{
            sec.classList.remove('show-animate');
        }

    });
//sticky header//
    let header=document.querySelectoor('header');
    header.classList.toggle('sticky',window.scrollY>100);
    //remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

