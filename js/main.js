
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