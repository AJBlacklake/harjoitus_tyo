class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid" >
                        <a class="navbar-brand" href="#">Näyttö applikaatio</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Tehtävälista</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutMe.html" >yhteystiedot</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header);