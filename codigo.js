const BOTON_INICIO = document.querySelector('.btn');
var btn_presionado = false;
BOTON_INICIO.addEventListener('click',function(){
    btn_presionado = true;
    CloseWindow();
});

function CloseWindow(){
    if(btn_presionado == true){
        setTimeout(function(){
            window.close();
        },2000);
    }
}
