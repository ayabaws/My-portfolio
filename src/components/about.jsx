function About() {
    return (
        <section className="about" id="apropos">
            <div className="section-title">
                <p>À PROPOS DE MOI</p>
                <h2>Qui suis-je ?</h2>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h3>
                        Je crée des expériences numériques
                        <span> simples, modernes et utiles.</span>
                    </h3>

                    <p>
                        Je suis Aya Coulibaly, jeune diplômée en Informatique de
                        gestion, passionnée par le design d'interfaces et le
                        développement web et mobile.
                    </p>

                    <p>
                        J'aime partir d'une idée ou d'un besoin pour concevoir une
                        solution numérique claire, esthétique et adaptée aux
                        utilisateurs.
                    </p>

                    <p>
                        Mon parcours me permet de travailler à la fois sur la
                        conception UI/UX et sur l'intégration et le développement
                        des interfaces.
                    </p>

                    <div className="about-info">
                        <div>
                            <strong>Formation</strong>
                            <span>Licence en Informatique de gestion</span>
                        </div>

                        <div>
                            <strong>Spécialité</strong>
                            <span>UI/UX & Développement Web/Mobile</span>
                        </div>

                        <div>
                            <strong>Localisation</strong>
                            <span>Bamako, Mali</span>
                        </div>
                    </div>
                </div>

                <div className="about-card">
                    <div className="about-card-number">01</div>

                    <h3>Design</h3>
                    <p>
                        Transformer les idées en interfaces intuitives et
                        cohérentes.
                    </p>

                    <div className="about-card-number">02</div>

                    <h3>Développement</h3>
                    <p>
                        Donner vie aux interfaces avec des technologies web et
                        mobiles modernes.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;