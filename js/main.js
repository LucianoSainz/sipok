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

