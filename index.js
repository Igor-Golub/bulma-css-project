// mobile menu

const burgerIcon = document.querySelector('#burger')
const navbarIcon = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navbarIcon.classList.toggle('is-active')
})