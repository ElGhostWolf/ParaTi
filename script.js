const images = document.querySelectorAll('.image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.remove('active');
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.add('hidden');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

// Mostrar la primera imagen al cargar la página
showImage(currentImageIndex);
