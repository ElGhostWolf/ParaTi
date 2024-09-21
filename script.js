const images = document.querySelectorAll('.image-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const description = document.querySelector('.image-description');
let currentImageIndex = 0;

// Función para mostrar la imagen en el índice especificado
function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
    description.textContent = images[index].alt;
}

// Función para mostrar la siguiente imagen
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Función para mostrar la imagen anterior
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Mostrar la primera imagen al cargar la página
images[0].classList.add('active');
description.textContent = images[0].alt;

// Eventos de los botones
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
