const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const imageContainer = document.querySelector('.image-container');
const descripcion = document.querySelector('.image-description');

botonMostrar.addEventListener('click', () => {
    mensajeInicial.classList.add('hidden');
    botonMostrar.classList.add('hidden');
    imageContainer.classList.remove('hidden'); // Muestra la imagen
    descripcion.classList.remove('hidden'); // Muestra la descripción
});
