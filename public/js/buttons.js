// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones
    const arautegiakBtn = document.querySelector('.arautegiak .btn');
    const egutegiaBtn = document.querySelector('.egutegia .btn');
    const memoriakBtn = document.querySelector('.memoriak .btn');
    const autoebaluazioaBtn = document.querySelector('.autoebaluazioa .btn');

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
    arautegiakBtn.addEventListener('click', function() {
        // Navegar a la página de reglamentos o mostrar modal
        console.log('Arautegiak clicked');
        window.location.href = '/arauak'; // Descomentar y ajustar la URL según necesites
    });

    egutegiaBtn.addEventListener('click', function() {
        // Navegar al calendario o mostrar modal
        console.log('Egutegia clicked');
        window.location.href = '/egutegia'; // Descomentar y ajustar la URL según necesites
    });

    memoriakBtn.addEventListener('click', function() {
        // Navegar a las memorias o mostrar modal
        console.log('Memoriak clicked');
        window.location.href = '/memoriak'; // Descomentar y ajustar la URL según necesites
    });

    autoebaluazioaBtn.addEventListener('click', function() {
        // Navegar al cuestionario de autoevaluación o mostrar modal
        console.log('Autoebaluazioa clicked');
        window.location.href = '/autoebaluazioa'; // Descomentar y ajustar la URL según necesites
    });


});

