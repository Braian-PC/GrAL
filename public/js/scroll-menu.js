        // Variables para controlar el scroll
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById("navbar");
    
        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
    
            if (currentScrollY > lastScrollY) {
                // Scroll hacia abajo: ocultar la navbar
                navbar.style.transform = "translateY(-100%)"; // Ocultar
            } else {
                // Scroll hacia arriba: mostrar la navbar
                navbar.style.transform = "translateY(0)"; // Mostrar
            }
    
            // Actualizar la posición del último scroll
            lastScrollY = currentScrollY;
        });