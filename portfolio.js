let menu = document.querySelector('#menu-icon');
let navb = document.querySelector('.navb');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navb.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navb.classList.remove('active');
}

const typed = new Typed('.multiple-context', {
    strings: ['Web developer', 'Junior Cyber Enthusiast'],
    typeSpeed: 10,
    backSpeed:50,
    backDelay: 1400,
    loop: true,
});


// Change header color when hovering over service boxes
const serviceBoxes = document.querySelectorAll('.services-box');
const header = document.querySelector('.header');

serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#667eea';
    });
    
    box.addEventListener('mouseleave', () => {
        header.style.backgroundColor = '#007f73';
    });
});