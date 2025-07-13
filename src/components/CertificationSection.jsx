import CertificationCard from "./CertificationCard";
import "./Certification.css";


import awsCert from "../assets/certs/cert_AWS.pdf";
import iicCert from "../assets/certs/cert_IIC.pdf";
import smlCert from "../assets/certs/cert_SML.pdf";

import awsImg from "../assets/certs/img/aws.png";
import iicImg from "../assets/certs/img/iic.png";
import smlImg from "../assets/certs/img/sml.png";

const certifications = [

  {
    title: "Machine Learning",
    issuer: "Stanford, DeepLearning.AI, Coursera",
    link: smlCert,
    image: smlImg
  },
  {
    title: "IIC Innovation Program",
    issuer: "AVV Coimbatore, Ministry of Education",
    link: iicCert,
    image: iicImg
  },
  {
    title: "AWS Cloud Engineer",
    issuer: "AVV CIR, Amazon Web Services",
    link: awsCert,
    image: awsImg
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
