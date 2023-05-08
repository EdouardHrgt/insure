const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const navList = document.getElementById('navlist')

openMenu.addEventListener('click', () => {
    navList.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', ()=>{
    navList.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
})




