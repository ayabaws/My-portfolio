function Projects() {
    const projects = [
        {
            number: "01",
            title: "HelloDoc",
            category: "Application web — UI/UX & Développement",
            description:
                "Application web de gestion de clinique intelligente permettant de gérer les rendez-vous, les patients, les médecins et les dossiers médicaux.",
            technologies: ["Figma", "React", "Node.js", "PostgreSQL"],
        },
        {
            number: "02",
            title: "Foodza",
            category: "Application mobile — UI/UX & Développement",
            description:
                "Application mobile pensée pour faciliter la découverte et la commande auprès de restaurants grâce à une expérience utilisateur simple et intuitive.",
            technologies: ["Figma", "React Native"],
        },
        {
            number: "03",
            title: "Site web de pédiatrie",
            category: "Site web — UI/UX & Développement",
            description:
                "Conception et développement d'un site web responsive destiné à présenter les services d'une structure spécialisée en pédiatrie.",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
    ];

    return (
        <section className="projects" id="projets">
            <div className="section-title">
                <p>MON TRAVAIL</p>
                <h2>Projets sélectionnés</h2>
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <article className="project-card" key={project.number}>

                        <div className="project-image">
                            <span>{project.number}</span>
                        </div>

                        <div className="project-content">
                            <p className="project-category">
                                {project.category}
                            </p>

                            <h3>{project.title}</h3>

                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <button className="project-button">
                                Voir le projet →
                            </button>
                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;