// mobile menu
const burgerIcon = document.querySelector('#burger')
const navbarIcon = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => navbarIcon.classList.toggle('is-active'))

// tabs
const tabs = document.querySelectorAll('.tabs li')
const tabContentBoxed = document.querySelectorAll('#tab-content > div')

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active')


        const target = tab.dataset.target
        tabContentBoxed.forEach(box => {
            if(box.getAttribute('id') === target) {
                box.classList.remove('is-hidden')
            } else {
                box.classList.add('is-hidden')
            }
        })
    })
})

