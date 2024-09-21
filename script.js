const images = ['images/imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
const dots = document.querySelectorAll('.dot');
const img = document.querySelector('img');
const nextButton = document.getElementById('nextButton');
const message = document.querySelector('.message');

let currentIndex = 0;

function showImage(n) {
  currentIndex = (currentIndex + n + images.length) % images.length;
  img.src = images[currentIndex];

  dots.forEach((dot, index) => {
    dot.classList.remove('active');
  });
  dots[currentIndex].classList.add('active');
}

showImage(0); // Mostrar la primera imagen al cargar la página

nextButton.addEventListener('click', () => {
  showImage(1);
  message.style.display = 'none'; // Ocultar el mensaje al hacer clic en el botón
});
