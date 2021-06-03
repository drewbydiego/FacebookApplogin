var objWindow;
function redireccionUno(){
     //window.location = "redireccion2.html";
    objWindow = window.open(location.href, "_self");
    //objWindow.close();
}
function cerrar(){
    objWindow.close();
}
