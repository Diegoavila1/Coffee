


document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.anterior');
    const nextButton = document.querySelector('.siguiente');
    const carouselImages = document.querySelector('.carrusel-imagenes');
    const images = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function mostrarImagen(posicion) {
      carouselImages.style.transform = `translateX(${-posicion * 34}%)`;
    }
  
    nextButton.addEventListener('click', function() {
      if (currentIndex < images.length - 3) {
        currentIndex += 1;

        mostrarImagen(currentIndex);
      }
    });
  
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex -= 1;

        mostrarImagen(currentIndex);
      }
    });
  });
  
  //el carrusel de recomendaciones te lleva a la tienda
  function redirigir() {
    window.location.href = "tienda.html";
}
