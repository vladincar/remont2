//open menu
const menu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('#mob-nav');
const bckMenu = document.querySelector('#blur-bkg-close');


menu.addEventListener('click',()=>{
    navMenu.classList.toggle('opened-menu');
    bckMenu.style.display="block";
    setTimeout(() => {
        bckMenu.classList.toggle('blur-bkg-open')
    }, 1);
})