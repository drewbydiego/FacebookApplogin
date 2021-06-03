var objWindow;
function redireccionUno(){
     //window.location = "redireccion2.html";
    objWindow = window.open(location.href, "_self");
    //objWindow.close();
    cerrar(objWindow);
}
function cerrar(){
    objWindow.close();
}
