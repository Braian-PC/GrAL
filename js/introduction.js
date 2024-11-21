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
    document.getElementById('menu-container').innerHTML = menuHTML;
  }, 500); // Retraso de 500 ms (ajustable)
}


document.addEventListener('DOMContentLoaded', function() {  
  const introSection = document.getElementById('intro');
  introSection.addEventListener('click', shrinkIntro);

  // Ejecutar shrinkIntro al pulsar cualquier tecla o la rueda hacia abajo
  document.addEventListener('keypress', shrinkIntro);

  document.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
          shrinkIntro();
      }
  });
});
