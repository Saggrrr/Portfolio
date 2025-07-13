import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactCard from "./ContactCard";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-list">
        <ContactCard
          icon={<FiMail size={80} />}
          text="ananthasagar13@gmail.com"
          link="mailto:ananthasagar13@gmail.com"
        />
        <ContactCard
          icon={<FaGithub size={80} />}
          text="github.com/saggrrr"
          link="https://github.com/saggrrr"
        />
        <ContactCard
          icon={<FaLinkedin size={80} />}
          text="linkedin.com/in/AnanthaSagarN"
          link="https://linkedin.com/in/AnanthaSagarN"
        />
      </div>
    </section>
  );
};

export default ContactSection;
