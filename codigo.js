const BTN_INICIO = document.querySelector('.btn');
var ancho;
var alto;
BTN_INICIO.addEventListener('click',function(){
    window.open("index.html", "Log", ancho = window.innerWidth,alto = window.innerHeight);
    //
    setTimeout(function(){
        window.close();
    },2000);
    window.close();
});