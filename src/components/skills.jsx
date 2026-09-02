function Skills() {
    const skills = [
        {
            number: "01",
            title: "UI/UX Design",
            description:
                "Conception d'interfaces modernes et intuitives, de l'idée au prototype.",
            items: [
                "Wireframing",
                "Prototypage",
                "Design d'interfaces",
                "Design System",
                "Responsive Design",
            ],
        },
        {
            number: "02",
            title: "Développement",
            description:
                "Création d'interfaces web et mobiles fonctionnelles et responsives.",
            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "React Native",
            ],
        },
        {
            number: "03",
            title: "Design graphique",
            description:
                "Création d'identités visuelles et de supports de communication.",
            items: [
                "Création de logos",
                "Branding",
                "Identité visuelle",
                "Flyers",
                "Affiches",
            ],
        },
        {
            number: "04",
            title: "Outils & Données",
            description:
                "Utilisation d'outils de conception, de versionnement et de gestion des données.",
            items: [
                "Figma",
                "Canva",
                "Git",
                "GitHub",
                "MySQL",
                "PostgreSQL",
            ],
        },
    ];

    return (
        <section className="skills" id="competences">
            <div className="section-title">
                <p>MES COMPÉTENCES</p>
                <h2>Ce que je sais faire</h2>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article className="skill-card" key={skill.number}>
                        <span className="skill-number">{skill.number}</span>

                        <h3>{skill.title}</h3>

                        <p>{skill.description}</p>

                        <div className="skill-list">
                            {skill.items.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;