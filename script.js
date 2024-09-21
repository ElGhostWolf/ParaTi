const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const imageContainer = document.querySelector('.image-container');
const descripcion = document.getElementById('descripcion');

botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    botonMostrar.style.display = 'none';
    imageContainer.style.display = 'block'; // Muestra la imagen
    descripcion.style.display = 'block'; // Muestra la descripción
});
