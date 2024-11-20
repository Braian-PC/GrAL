
function shrinkIntro() {
  const introSection = document.getElementById('intro');
  introSection.classList.add('shrink');
  
  // Mostrar el botón del menú
  const menuButton = document.getElementById('menu-button');
  menuButton.classList.add('visible');

  //Hide chevron-down
    const chevronDown = document.querySelector('bi-chevron-down');
    chevronDown.classList.add('shrink'); 

    // Reducir titulo 
    const persistentText = document.querySelector('description');
    persistentText.classList.add('shrink');
}

function toggleMenu() {
  const menu = document.getElementById('sidebarMenu');
  menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {  
    const introSection = document.getElementById('intro');
    introSection.addEventListener('click', shrinkIntro);

    // al pulsar cualquier letra del teclado o la ruedecilla del rato shrinkIntro
    document.addEventListener('keypress', shrinkIntro);

    // la ruedecilla del raton pero solo para abajo

    document.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            shrinkIntro();
        }
    });

    
    const menuButton = document.getElementById('');
    menuButton.addEventListener('click', toggleMenu);
});