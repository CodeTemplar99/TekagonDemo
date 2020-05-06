// side bar
let isOpen = false

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}


// slide
// var on = true;
// var myVar = setInterval(function () { if (on) { slides() } on = true; }, 7000);

document.querySelector('.explore').addEventListener('click', function () {
    window.scrollTo({
        top: 710,
        behavior: 'smooth'
    });
})
