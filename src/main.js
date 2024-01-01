navLink = document.querySelector('.ul-list')
nav = document.querySelector('.nav')
function OpenNav() {
    navLink.classList.toggle('active')
    nav.classList.toggle('flex')
    console.log('ham click');
}