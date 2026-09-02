function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          AYA<span>.</span>
        </div>

        <p>
          UI/UX Designer & Développeuse Web/Mobile
        </p>

        <div className="footer-links">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Aya Coulibaly. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
