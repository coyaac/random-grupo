const boton = document.getElementById('apretame');

// Lista de imágenes disponibles
const imagenes = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg']; // Asegúrate de tener estas imágenes en la misma carpeta

boton.addEventListener('click', () => {
  const nuevaImagen = document.createElement('img');

  // Elegir una imagen aleatoria del array
  const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
  nuevaImagen.src = imagenAleatoria;
  nuevaImagen.className = 'imagen';

  // Elegir un ancho aleatorio entre 50 y 150 píxeles
  const anchoAleatorio = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
  nuevaImagen.style.width = `${anchoAleatorio}px`;
  nuevaImagen.style.height = 'auto';

  document.body.appendChild(nuevaImagen);

  nuevaImagen.onload = () => {
    const imgWidth = nuevaImagen.width;
    const imgHeight = nuevaImagen.height;

    const botonRect = boton.getBoundingClientRect();
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    let posX, posY;
    let interfiere;

    do {
      posX = Math.random() * (bodyWidth - imgWidth);
      posY = Math.random() * (bodyHeight - imgHeight);

      interfiere = !(
        posX + imgWidth < botonRect.left ||
        posX > botonRect.right ||
        posY + imgHeight < botonRect.top ||
        posY > botonRect.bottom
      );
    } while (interfiere);

    nuevaImagen.style.left = `${posX}px`;
    nuevaImagen.style.top = `${posY}px`;
  };
});
