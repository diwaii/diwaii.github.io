var burger = document.querySelector('.burger');
var extranav = document.getElementById('hidden-nav');

function navSlide() {
    if (extranav.style.display === "" || extranav.style.display === "none" || extranav.style.transform === "translateX(100%)") {
        extranav.style.display = "block";
        extranav.style.transition = "1s"
        extranav.style.transform = "translateX(0%)";
    } else if (extranav.style.display == "block") {
        extranav.style.transition = "0.5s"
        extranav.style.transform = "translateX(100%)";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        extranav.style.transition = "0.5s"
        extranav.style.transform = "translateX(100%)";
    }
}
  
var x = window.matchMedia("(min-width: 769px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

burger.onclick = navSlide;
