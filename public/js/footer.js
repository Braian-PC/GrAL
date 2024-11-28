// Crear el contenido del footer
const footerContent = `
<footer class="bg-dark text-light py-4 mt-auto">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h5>Helbidea</h5>
                <p>Barrio Sarriena s/n , 48940 Leioa (Bizkaia)</p>
            </div>
            <div class="col-md-3">
                <h5>Jar zaitez harremanetan</h5>
                <p>Email: info@adibidea.com</p>
                <p>Teléfono: +34 123 456 789</p>
                <p>Informazio gehiago: <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" class="">sakatu emen.</a></p>
            </div>
        </div>
        <div class="text-center mt-3">
            <p class="mb-0">&copy; 2024-2025 PKE ikasleak. Bootstrap lantzen.</p>
        </div>
    </div>
</footer>
`;

// Insertar el footer al final del body
document.body.insertAdjacentHTML('beforeend', footerContent);
