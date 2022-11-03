import arrowUp from './images/icon-arrow-up.svg'
import arrowDown from './images/icon-arrow-down.svg'
// selecr links
const links = document.querySelectorAll('.list__list--link')


// add events to link that contain sublist
links.forEach(link => {
    link.addEventListener('click',(e) => {

        if(e.target.nextElementSibling){
            showSubList(e.target.nextElementSibling)
            toggleIcon(e.target,e.target.nextElementSibling.classList.contains('hide'))
        }
    })
})

// show subList
const showSubList = (el) => {
    el.classList.toggle('hide')
}

// toggle icons
const toggleIcon = (linkElement,isListHidden) => {
    const icon = linkElement.lastChild
    if(isListHidden){
        icon.src = arrowDown
    }else{
        icon.src = arrowUp
    }
}


import Navbar from './js/NavBar'
const navBar = new Navbar()


