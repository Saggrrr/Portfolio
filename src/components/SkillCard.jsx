const SkillCard = ({ image, label }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default SkillCard;
