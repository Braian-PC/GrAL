// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones
    const ehuBtn = document.querySelector('.ehuBtn .btn');
    const infoBtn = document.querySelector('.infoBtn .btn');

    // Agregar efectos hover a todos los botones
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Manejadores de eventos para cada botón
    ehuBtn.addEventListener('click', function() {
        // Navegar a la página de reglamentos o mostrar modal
        console.log('EHU arautegiak clicked');
        window.location.href = 'arauak-upv-ehu'; // Descomentar y ajustar la URL según necesites
    });

    infoBtn.addEventListener('click', function() {
        // Navegar al calendario o mostrar modal
        console.log('info arautegiak clicked');
        window.location.href = 'arauak-fakultatea'; // Descomentar y ajustar la URL según necesites
    });

});