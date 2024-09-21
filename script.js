const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const botonSiguiente = document.getElementById('siguiente-imagen');
const botonAnterior = document.getElementById('anterior-imagen');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image');
const descripcion = document.getElementById('descripcion');

// Descripciones para las imágenes
const descripciones = [
    'Descripción de la imagen 1',
    'Descripción de la imagen 2',
    'Descripción de la imagen 3'
];

let currentImageIndex = 0;

botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    imageContainer.style.display = 'flex';
    descripcion.style.display = 'block';
    botonMostrar.style.display = 'none';
    // Mostrar la primera imagen por defecto
    images[currentImageIndex].style.display = 'block';
    descripcion.textContent = descripciones[currentImageIndex];
    botonSiguiente.style.display = 'inline';
    botonAnterior.style.display = 'inline';
});

botonSiguiente.addEventListener('click', () => {
    // Ocultar la imagen actual
    images[currentImageIndex].style.display = 'none';
    
    // Avanzar a la siguiente imagen
    currentImageIndex++;
    
    // Si llegamos al final, no avanzar más
    if (currentImageIndex >= images.length) {
        currentImageIndex = images.length - 1; // Limitar el índice
    }
    
    // Mostrar la imagen siguiente
    images[currentImageIndex].style.display = 'block';
    descripcion.textContent = descripciones[currentImageIndex];
});

botonAnterior.addEventListener('click', () => {
    // Ocultar la imagen actual
    images[currentImageIndex].style.display = 'none';
    
    // Retroceder a la imagen anterior
    currentImageIndex--;
    
    // Si estamos al principio, no retroceder más
    if (currentImageIndex < 0) {
        currentImageIndex = 0; // Limitar el índice
    }
    
    // Mostrar la imagen anterior
    images[currentImageIndex].style.display = 'block';
    descripcion.textContent = descripciones[currentImageIndex];
});
