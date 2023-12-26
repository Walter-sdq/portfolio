ham = document.querrySelector('.ham')
navLink = document.querySelector('.ul-list')
ham.onclick = function () {
    navLink.classList.toggle('active')
    console.log(`ham clicked`);
}