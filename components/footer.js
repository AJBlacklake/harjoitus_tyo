
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer mt-auto py-3 bg-light">
                <div class="container">
                    <span class="text-muted">Näyttö applikaatio</span>
                    <span class="text-muted float-right">© 2025 Arvi Mustajärvi</span>
                    <span><a href="https://www.linkedin.com/in/arvi-mustajärvi"><i class="fab fa-linkedin"></i></a></span>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);