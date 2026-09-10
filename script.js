window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('hero-image');
  
  imagen.addEventListener('mouseover', peligro, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('hero-image');
  imagen.src = "/img/corvusblue.jpg";
}

function peligro() {
  var imagen = document.getElementById('hero-image');
  imagen.src = "/img/corvuspfp.jpg";
}