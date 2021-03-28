

//===========CONTACT US FORM===============

let contactBtn = document.querySelector(".btn-compact");
let closeBtn = document.querySelector(".btn-close");
let formContactUs = document.querySelector(".contact-us");
let line = document.querySelector(".line");
console.log(formContactUs)


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