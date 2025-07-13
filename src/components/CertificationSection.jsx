import CertificationCard from "./CertificationCard";
import "./Certification.css";


import awsCert from "../assets/certs/cert_AWS.pdf";
import iicCert from "../assets/certs/cert_IIC.pdf";
import smlCert from "../assets/certs/cert_SML.pdf";


const certifications = [

  {
    title: "Machine Learning",
    issuer: "DeepLearning.AI, Coursera",
    link: smlCert,
  },
  {
    title: "IIC Innovation Program",
    issuer: "AVV Coimbatore, Ministry of Education",
    link: iicCert,
  },
  {
    title: "AWS Cloud Engineer",
    issuer: "Amazon Web Services",
    link: awsCert,
  }
];


const CertificationSection = () => {
  return (
    <section className="cert-section" id="certifications">
      <h1 className="cert-header">Certifications</h1>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
