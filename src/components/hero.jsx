import heroBg from "../assets/télécharger.jpg";

function Hero() {
    return (
        <section 
            className="hero" 
            id="accueil"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-content">
                <p className="intro">Bonjour, je suis</p>

                <h1>
                    Aya <span>Coulibaly</span>
                </h1>

                <h2>
                    UI/UX Designer &amp; Développeuse Web/Mobile
                </h2>

                <p className="description">
                    Je transforme les idées en expériences numériques
                    modernes, intuitives et fonctionnelles.
                </p>

                <div className="hero-buttons">
                    <a href="#projets" className="primary-button">
                        Voir mes projets
                    </a>
                    <a href="#contact" className="secondary-button">
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;