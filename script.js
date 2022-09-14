const body = document.querySelector('body');
const showMenuButton = document.getElementById('show-menu-button');
const nav = document.querySelector('nav');


showMenuButton.addEventListener('click', () => {
    if(nav.classList.contains('visible')) {
        nav.classList.remove('visible'); 
        body.style.overflowY = 'scroll';     
        showMenuButton.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`
    } else {
        body.style.overflowY = 'hidden'; 
        nav.classList.add('visible'); 
        showMenuButton.innerHTML = `<img src="images/icon-close.svg" alt="">`
    }
})