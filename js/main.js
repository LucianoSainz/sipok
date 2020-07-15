
$(document).ready(function(){
    AOS.init();
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazar = window.pageYOffset;
    if(ubicacionPrincipal >= desplazar){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazar;
})

//----MENU

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;

    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;

    }
    
    enlacesHeader.classList.toggle("menudos")
})


var contentUns =$("#content").offset().top,
uber = $("#uber").offset().top,
questions = $("#questions").offset().top,
info = $("#info").offset().top;

$("#btn-content").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: contentUns -200
    }, 500);
});

$("#btn-uber").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: uber 
    }, 500);
});

$("#btn-questions").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: questions
    }, 700);
});

$("#btn-info").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: info
    }, 900);
});

});