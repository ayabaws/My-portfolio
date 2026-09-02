import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("");

        emailjs
            .sendForm(
                "service_32arj9e", // Service ID
                "template_hqkwon6", // Template ID
                form.current,
                "O_SRqJPgODLqzeOsu" // Public Key
            )
            .then(
                (result) => {
                    setIsSubmitting(false);
                    setStatusMessage("Message envoyé avec succès !");
                    form.current.reset(); // Réinitialise le formulaire
                },
                (error) => {
                    setIsSubmitting(false);
                    setStatusMessage("Une erreur s'est produite. Veuillez réessayer.");
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <div className="section-title">
                <p>CONTACT</p>
                <h2>Travaillons ensemble</h2>
            </div>

            <div className="contact-content">
                <div className="contact-text">
                    <h3>
                        Une idée, un projet ou une opportunité ?
                    </h3>

                    <p>
                        N'hésitez pas à me contacter. Je serais ravie d'échanger
                        avec vous autour de votre projet ou d'une future
                        collaboration.
                    </p>

                    <div className="contact-info">
                        <div>
                            <span>Email</span>
                            <a href="mailto:ayac8359@gmail.com">
                                ayac8359@gmail.com
                            </a>
                        </div>

                        <div>
                            <span>Téléphone</span>
                            <a href="tel:+22392123647">
                                +223 92 12 36 47
                            </a>
                        </div>

                        <div>
                            <span>Localisation</span>
                            <p>Bamako, Mali</p>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="user_name">Nom</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="Votre adresse email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Votre message..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="primary-button" disabled={isSubmitting}>
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message →"}
                    </button>

                    {statusMessage && (
                        <p className="form-status-message" style={{ marginTop: "15px", fontSize: "14px", fontWeight: "600", color: statusMessage.includes("succès") ? "var(--primary)" : "red" }}>
                            {statusMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
