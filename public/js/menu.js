const navbarHTML = `
    
    <!-- Offcanvas Sidebar -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title fs-6" id="sidebarMenuLabel">Menua: GrAL-ren laguntza.</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group">
                <li class="list-group-item">
                    <a id="home" href="/home" class="text-decoration-none">Hasiera orria</a>
                </li>
                
                <!-- Dropdown Submenu -->
                <li class="list-group-item">
                    <button class="btn btn-link text-decoration-none p-0" data-bs-toggle="collapse" data-bs-target="#submenu1" aria-expanded="false" aria-controls="submenu1">
                        <i class="bi bi-chevron-down" style="font-size: 12px;"></i> Graduaren Amaierako Lana
                    </button>
                    <div class="collapse" id="submenu1">
                        <ul class="list-group ms-3 mt-2">
                            <li class="list-group-item">
                                <button id="arauak" href="#" class="btn btn-link text-decoration-none p-0" data-bs-toggle="collapse" data-bs-target="#submenu2" aria-expanded="false" aria-controls="submenu1">
                                    <i class="bi bi-chevron-down" style="font-size: 12px;"></i> Arauak
                                </button>
                                <div class="collapse" id="submenu2">
                                    <ul class="list-group ms-3 mt-2">
                                        <li class="list-group-item">
                                            <a id="arauak-upv-ehu" href="/arauak-upv-ehu" class="text-decoration-none">UPV/EHU-ko Araudiak</a>
                                        </li>
                                        <li class="list-group-item">
                                            <a id="arauak-fakultatea" href="/arauak-fakultatea" class="text-decoration-none">Informatika Fakultateko Araudiak</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="list-group-item">
                                <a id="memoriak" href="/memoriak" class="text-decoration-none">Memoria</a>
                            </li>
                            <li class="list-group-item">
                                <a id="egutegia" href="/egutegia" class="text-decoration-none">Egutegia</a>
                            </li>
                            <li class="list-group-item">
                                <a id="autoebaluazioa" href="/autoebaluazioa" class="text-decoration-none">Autoebaluazioa</a>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li class="list-group-item">
                    <a id="bibliografia" href="/bibliografia" class="text-decoration-none">Bibliografia</a>
                </li>
                <li class="list-group-item">
                    <a id="about-us" href="/about-us" class="text-decoration-none">About Us</a>
                </li>
            </ul>
        </div>
    </div>

`;
function updateActiveLink(currentHref) {
    const activeLink = document.getElementById(currentHref);
    if (activeLink) {
        activeLink.style.color = 'rgb(5, 166, 235)';
        activeLink.href = '#';
    }
}

window.onload = () => {
    document.getElementById('menu').innerHTML = navbarHTML;
};

