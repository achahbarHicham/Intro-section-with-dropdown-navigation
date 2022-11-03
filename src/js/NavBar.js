class Navbar {
    constructor(){
        this.navIcon = document.querySelector('.humber-icon')
        this.navList = document.querySelector('.list')
        this.closeIcon = document.querySelector('.close-icon')


        this.navIcon.addEventListener('click',this.showNav)
        this.closeIcon.addEventListener('click',this.hideNav)
    }

    showNav = () => {
        this.navList.classList.add('show')
        this.navList.classList.remove('hide')
    }

    hideNav = () => {
        this.navList.classList.add('hide')
        this.navList.classList.remove('show')
    }

}


export default Navbar