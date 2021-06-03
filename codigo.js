var objWindow;
function redireccionUno(){
     //window.location = "redireccion2.html";
     objWindow = window.close(location.href, "redireccion2.html");
    //objWindow.close();
    cerrar(objWindow);
}

function cerrar(objWindow){
    objWindow.close();
}