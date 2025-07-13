const CertificationCard = ({ title, issuer, link, image }) => {
  return (
    <div className="cert-card">
      <img src={image} alt={title} className="cert-img" />
      <h3 className="cert-title">{title}</h3>
      <p className="cert-issuer">{issuer}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="cert-button">View Certificate</button>
      </a>
    </div>
  );
};

export default CertificationCard;
