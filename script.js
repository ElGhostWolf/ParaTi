const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const botonSiguiente = document.getElementById('siguiente-imagen');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image');
const descripcion = document.getElementById('descripcion');
let currentImageIndex = 0;

botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    imageContainer.style.display = 'flex';
    descripcion.style.display = 'block';
    botonMostrar.style.display = 'none';
    // Mostrar la primera imagen por defecto
    images[currentImageIndex].style.display = 'block';
    botonSiguiente.style.display = 'inline';
});

botonSiguiente.addEventListener('click', () => {
    // Ocultar la imagen actual
    images[currentImageIndex].style.display = 'none';
    // Pasar a la siguiente imagen
    currentImageIndex++;
    // Si llegamos al final, ocultamos el botón de siguiente
    if (currentImageIndex >= images.length) {
        botonSiguiente.style.display = 'none';
    } else {
        // Mostrar la siguiente imagen
        images[currentImageIndex].style.display = 'block';
    }
});
