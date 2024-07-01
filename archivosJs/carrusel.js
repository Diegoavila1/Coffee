


document.addEventListener('DOMContentLoaded', function() {
    const anterior = document.querySelector('.anterior');
    const siguiente = document.querySelector('.siguiente');
    const carouselImages = document.querySelector('.carrusel-imagenes');
    const images = document.querySelectorAll('.carousel-item');
    let rastreadorIndice = 0;
  
    function mostrarImagen(posicion) {
      carouselImages.style.transform = `translateX(${-posicion * 34}%)`;
    }
  
    siguiente.addEventListener('click', function(){
      if (rastreadorIndice < images.length - 3) {
        rastreadorIndice += 1;
        mostrarImagen(rastreadorIndice);
      }

    });
  
    anterior.addEventListener('click', function(){
      if (rastreadorIndice > 0) {
        rastreadorIndice -= 1;
        mostrarImagen(rastreadorIndice);
      }

    });

});
  



  //el carrusel de recomendaciones te lleva a la tienda
  function redirigir() {
    window.location.href = "tienda.html";
  }
