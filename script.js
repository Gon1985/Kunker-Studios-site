/*----------------------- Codigo Javascript formulario----------------------->*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Validar el nombre (solo letras y espacios)
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      valid = false;
      alert("Please enter a valid name without numbers.");
      nameInput.focus();
    }

    // Validar el correo electrónico (formato de correo electrónico válido)
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      valid = false;
      alert("Please enter a valid email address.");
      emailInput.focus();
    }


    // Validar el número de teléfono (solo dígitos)
    if (!/^\d+$/.test(phoneInput.value)) {
      valid = false;
      alert("Please enter a valid phone number.");
      phoneInput.focus();
    }

    // Validar campos requeridos
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
      valid = false;
      alert("All fields are required.");
    }

    if (!valid) {
      event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
  });
});


/*--------------------------------------------------------------------------------------------------------->*/



document.addEventListener('DOMContentLoaded', function () {
    const abrirNavlist = document.getElementById('abrir-navlist');
    const cerrarMenu = document.querySelector('.cerrar-menu');
    const navlist = document.querySelector('.navlist');
    var isCarouselPaused = false;

    // Agregar evento clic al botón para abrir el menú
    abrirNavlist.addEventListener('click', function () {
        navlist.style.display = 'flex'; // Muestra el navlist cuando se hace clic
    });

    // Agregar evento clic al botón para cerrar el menú
    cerrarMenu.addEventListener('click', function () {
        navlist.style.display = 'none';})})




document.addEventListener("DOMContentLoaded", function () {
  const imagesWrapper = document.querySelector(".wrapper");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentImageIndex = 0;

  leftArrow.addEventListener("click", function () {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    }
    scrollToCurrentImage();
  });

  rightArrow.addEventListener("click", function () {
    if (currentImageIndex < imagesWrapper.children.length - 1) {
      currentImageIndex++;
    }
    scrollToCurrentImage();
  });

  imagesWrapper.addEventListener("click", function () {
    // Mostrar la imagen ampliada
    const selectedImage = imagesWrapper.children[currentImageIndex];
    const enlargedImage = document.createElement("div");
    enlargedImage.className = "enlarged-image";
    enlargedImage.innerHTML = `<img src="${selectedImage.src}" alt="${selectedImage.alt}">`;
    document.body.appendChild(enlargedImage);

    enlargedImage.addEventListener("click", function () {
      // Cerrar la imagen ampliada al hacer clic en ella
      enlargedImage.remove();
    });
  });

  function scrollToCurrentImage() {
    const selectedImage = imagesWrapper.children[currentImageIndex];
    const imageWidth = selectedImage.offsetWidth;
    const scrollPosition = currentImageIndex * imageWidth;
    imagesWrapper.scrollLeft = scrollPosition;
  }
});



/*----------------------- Galeria concept art----------------------->*/









