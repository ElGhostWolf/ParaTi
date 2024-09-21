const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image');
const descripcion = document.getElementById('descripcion');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
let currentImageIndex = 0;

// Mostrar las imágenes al presionar "Presiona aquí"
botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    imageContainer.style.display = 'flex';
    descripcion.style.display = 'block';
    // Mostrar la primera imagen por defecto
    images[currentImageIndex].style.display = 'block';
});

// Función para mostrar la imagen anterior
botonAnterior.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none'; // Ocultar la imagen actual
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Pasar a la imagen anterior
    images[currentImageIndex].style.display = 'block'; // Mostrar la nueva imagen
});

// Función para mostrar la siguiente imagen
botonSiguiente.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none'; // Ocultar la imagen actual
    currentImageIndex = (currentImageIndex + 1) % images.length; // Pasar a la siguiente imagen
    images[currentImageIndex].style.display = 'block'; // Mostrar la nueva imagen
});

