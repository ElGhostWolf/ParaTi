const images = document.querySelectorAll('.image-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const description = document.querySelector('.image-description');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach(image => {
        image.classList.remove('active');
    });
    images[index].classList.add('active');
    description.textContent = images[index].alt;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Mostrar la primera imagen al cargar la página
showImage(0);

// Eventos de los botones
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
