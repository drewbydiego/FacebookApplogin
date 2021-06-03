window.addEventListener('load',function(){
  setTimeout(function(){
    var objWindow = window.open(location.href, "_self");
    objWindow.close();
  },3000);
});