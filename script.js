// Ejemplo de un efecto de desvanecimiento al pasar el mouse
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.opacity = '0.7';
  });
  image.addEventListener('mouseout', () => {
    image.style.opacity = '1';
  });
});
