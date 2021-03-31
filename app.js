

//==============================CONTACT US FORM==============================

let contactBtn = document.querySelector(".btn-compact");
let closeBtn = document.querySelector(".btn-close");
let formContactUs = document.querySelector(".contact-us");
let line = document.querySelector(".line");


contactBtn.addEventListener("click", function() {
    formContactUs.classList.add("show", "transition-in");
    closeBtn.classList.add("show");    
    line.classList.add("hide");

    line.classList.remove("show");
    formContactUs.classList.remove("hide", "transition-out");
    closeBtn.classList.remove("hide");
})
closeBtn.addEventListener("click", function() {
    formContactUs.classList.add("hide", "transition-out");    
    closeBtn.classList.add("hide");    
    line.classList.add("show");


    line.classList.remove("hide");
    closeBtn.classList.remove("show");
    formContactUs.classList.remove("show", "transition-in");
})

//==============================MOBILE MENU==============================

let mobileMenu = document.querySelectorAll(".nav-mobile-menu");
let menu = document.querySelector(".menu");
let featMenu = document.querySelector(".feat-menu");
let blogMenu = document.querySelector(".blog-menu");

let menuBtn = document.querySelectorAll(".menu a", ".feat-menu", ".blog-menu");



   

mobileMenu[0].addEventListener("click", function() {
    mobileMenu[0].classList.toggle("active-menu");
    if (mobileMenu[0].classList.contains("active-menu")) {
        menu.classList.add("active-menu");
    } else {
        menu.classList.remove("active-menu")
    }
    menuBtn.forEach(btn => 
        btn.addEventListener("click", function() {
            mobileMenu[0].classList.toggle("active-menu");
            menu.classList.remove("active-menu");
        })
    )
})
mobileMenu[1].addEventListener("click", function() {
    mobileMenu[1].classList.toggle("active-menu");
    if (mobileMenu[1].classList.contains("active-menu")) {
        featMenu.classList.add("active-menu");
    } else {
        featMenu.classList.remove("active-menu")
    }
    menuBtn.forEach(btn => 
        btn.addEventListener("click", function() {
            mobileMenu[1].classList.toggle("active-menu");
            featmenu.classList.remove("active-menu");
        })
    )
})
mobileMenu[2].addEventListener("click", function() {
    mobileMenu[2].classList.toggle("active-menu");
    if (mobileMenu[2].classList.contains("active-menu")) {
        blogMenu.classList.add("active-menu");
    } else {
        blogMenu.classList.remove("active-menu")
    }
    menuBtn.forEach(btn => 
        btn.addEventListener("click", function() {
            mobileMenu[2].classList.toggle("active-menu");
            blogmenu.classList.remove("active-menu");
        })
    )
})










