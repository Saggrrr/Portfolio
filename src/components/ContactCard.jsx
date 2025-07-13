// ContactCard.jsx
import "./Contact.css";

const ContactCard = ({ icon, text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="contact-card">
      <div className="icon">{icon}</div>
      <p className="contact-text">{text}</p>
    </a>
  );
};

export default ContactCard;
