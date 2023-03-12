function insertHeader() {
	var headerContainer = document.getElementById('script-header-container');
	var baseUrl = window.location.origin;
	baseUrl += '/portfolio';
	headerContainer.innerHTML = `
    <!-- Header -->
    <header id="header">
        <h1><a href="${baseUrl}/index.html">Page d'accueil</a></h1>
        <nav class="links">
            <ul>
                <li><a href="${baseUrl}/pages/prepa.html">Année de prépa</a></li>
                <li>
                    <a href="${baseUrl}/pages/first_year_bts.html">1er année de BTS</a>
                </li>
                <li>
                    <a href="${baseUrl}/pages/second_year_bts.html">2ème année de BTS</a>
                </li>
                <li>
                    <a href="${baseUrl}/pages/exp_pro.html">Éxperiences profesionnels</a>
                </li>
            </ul>
        </nav>
        <nav class="main">
            <ul>
                <li class="menu">
                    <a class="fa-bars" href="#menu">Menu</a>
                </li>
            </ul>
        </nav>
    </header>
    <!-- Menu -->
    <section id="menu">
        <!-- Links -->
        <section>
            <ul class="links">
                <li>
                    <a href="${baseUrl}/pages/prepa.html">
                        <h3>Année de prépa</h3>
                        <p>Préparation au CAP ésthetique</p>
                    </a>
                </li>
                <li>
                    <a href="${baseUrl}/pages/first_year_bts.html">
                        <h3>1er année de BTS</h3>
                        <p>Préparation au BTS MECP</p>
                    </a>
                </li>
                <li>
                    <a href="${baseUrl}/pages/second_year_bts.html">
                        <h3>2ème année de BTS</h3>
                        <p>Préparation au BTS MECP</p>
                    </a>
                </li>
                <li>
                    <a href="${baseUrl}/pages/exp_pro.html">
                        <h3>Éxperiences profesionnels</h3>
                        <p>Différents contrats CDD / extra</p>
                    </a>
                </li>
            </ul>
        </section>
    </section>    
    `;
}
window.onload = insertHeader;
