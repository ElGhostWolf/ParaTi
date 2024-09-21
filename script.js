const mensajeInicial = document.getElementById('mensaje-inicial');
const botonMostrar = document.getElementById('mostrar-imagenes');
const imageContainer = document.querySelector('.image-container');
const descripcion = document.getElementById('descripcion');

// Mostrar la primera imagen al hacer clic en "Presiona aquí"
botonMostrar.addEventListener('click', () => {
    mensajeInicial.style.display = 'none';
    botonMostrar.style.display = 'none';
    imageContainer.style.display = 'flex';
    descripcion.style.display = 'block';
});
