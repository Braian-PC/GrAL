function shrinkIntro() {
  const introSection = document.getElementById('intro');
  introSection.classList.add('shrink');

  // Mostrar el botón del menú
  const menuButton = document.getElementById('menu-button');
  if (menuButton) menuButton.classList.add('visible');

  // Ocultar el chevron hacia abajo
  const chevronDown = document.querySelector('.bi-chevron-down');
  if (chevronDown) chevronDown.classList.add('shrink');

  // Reducir el texto persistente
  const persistentText = document.querySelector('.description');
  if (persistentText) persistentText.classList.add('shrink');

  // Insertar el menú en el contenedor
  setTimeout(() => {
      const menuHTML = `
          <nav class="navbar navbar-dark bg-dark menu-slide-down">
              <div class="container-fluid d-flex align-items-center justify-content-start">
                  <!-- Botón para abrir el panel lateral -->
                  <button id="menu-button" class="bg-dark border-0 me-2 d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
                      <i class="bi bi-list text-white"></i>
                  </button>
          
                  <!-- Logo y título -->
                  <div class="d-flex align-items-center">
                      <img src="Irudiak/Bilingüe_negativo_alta-removebg-preview.png" alt="UPV/EHU Logo" style="height: 30px;" class="me-2">
                      <span class="text-white">Informatika Fakultatea</span>
                  </div>
              </div>
          </nav>
      `;
    const menu=document.querySelector('.menu-container.unvisible');
    menu.innerHTML = menuHTML;
    menu.classList.remove('unvisible');
  }, 500); 

  setTimeout(() => {
    const disclaimerModalElement = document.getElementById('disclaimerModal');
    const disclaimerModal = new bootstrap.Modal(disclaimerModalElement, {
      backdrop: 'static', // Impide que se cierre haciendo clic fuera del modal
      keyboard: false // Impide que se cierre con la tecla ESC
    });
    disclaimerModal.show();
  
    // Obtener referencia al checkbox y al botón de aceptar
    const disclaimerCheckbox = document.getElementById('disclaimerCheckbox');
    const acceptButton = document.getElementById('acceptButton');
  
    // Función para manejar el cambio del checkbox
    function handleCheckboxChange() {
      if (disclaimerCheckbox.checked) {
        acceptButton.disabled = false; // Habilitar el botón
      } else {
        acceptButton.disabled = true; // Deshabilitar el botón si no está marcado
      }
    }
  
    // Añadir el eventListener una sola vez
    disclaimerCheckbox.addEventListener('change', handleCheckboxChange);
  
  }, 1000);

  const introSection2 = document.getElementById('intro');
  introSection2.removeEventListener('click', shrinkIntro);

  // Ejecutar shrinkIntro al pulsar cualquier tecla o la rueda hacia abajo
  document.removeEventListener('keypress', shrinkIntro);

  document.removeEventListener('wheel', handleWheelEvent);
}



document.addEventListener('DOMContentLoaded', function() {  
  const introSection = document.getElementById('intro');
  introSection.addEventListener('click', shrinkIntro);

  // Ejecutar shrinkIntro al pulsar cualquier tecla o la rueda hacia abajo
  document.addEventListener('keypress', shrinkIntro);

  document.addEventListener('wheel', handleWheelEvent);
});

function handleWheelEvent(event) {
    if (event.deltaY > 0) {
      shrinkIntro();
    }
  }
