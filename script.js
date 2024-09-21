const images = ['images/imagen1.jpg', 'images/imagen2.jpg', 'images/imagen3.jpg'];
const dots = document.querySelectorAll('.dot');
const imgElement = document.querySelector('.image-container img');

let currentImageIndex = 0;

function showImage(index) {
    imgElement.src = images[index];
    imgElement.classList.remove('active');
    void imgElement.offsetWidth; // Trigger reflow for transition
    imgElement.classList.add('active');

    // Actualizar los puntos
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});
