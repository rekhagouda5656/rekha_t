// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>FrontEnd Developer</strong>')
    .pauseFor(2500)
    .start();


// var arr = ["design", "illustration", "development", "coding",];
// var i = 0;

// function changeText() {
//     if (i != arr.length) {
//         $("strong").text(arr[i]);
//         i++;
//     }
//     else {
//         i = 0;
//         $("strong").text(arr[i])
//     }
// };

// var t = setInterval(changeText, 500);

// var typed = new Typed(".typing", {
//     strings: ["Front end developer","Fresher","Technician", "Blogger", "Designer", "Freelancer","Manager"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });
// var typed = new Typed(".typing-3", {
//     strings: ["Connect with me on :)"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

// var typed = new Typed(".typing-2", {
//     strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

