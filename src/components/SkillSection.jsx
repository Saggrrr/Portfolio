import SkillCard from "./SkillCard";

// Programming Languages
import python from "../assets/prog_lang/python.png";
import java from "../assets/prog_lang/java.png";
import c from "../assets/prog_lang/c.png";
import cpp from "../assets/prog_lang/cpp.png";
import haskell from "../assets/prog_lang/haskell.png";
import arduino from "../assets/prog_lang/arduino.png";
import html from "../assets/prog_lang/htmll.png";
import css from "../assets/prog_lang/css.webp";
import js from "../assets/prog_lang/javascri.png";
import mysql from "../assets/prog_lang/mysql.png";
import github from "../assets/prog_lang/github.png";
import react from "../assets/prog_lang/reactt.png";



// ...import other logos

const SkillsSection = () => {
  return (
    <section>


      <h2 style={{ color: '#dddddd' }}> Web Technologies</h2>
      <div className="skills-grid">
        <SkillCard image={html} label="HTML" />
        <SkillCard image={css} label="CSS" />
        <SkillCard image={js} label="JavaScript" />
        <SkillCard image={react} label="ReactJs" />
        {/* Add more */}
      </div>

    <h2 style={{ color: '#dddddd' }}>Version Control</h2>
      <div className="skills-grid">
        <SkillCard image={github} label="Github" />

        {/* Add more */}
      </div>



      <h2 style={{ color: '#dddddd' }}>Programming Languages</h2>
      <div className="skills-grid">
        <SkillCard image={python} label="Python" />
        <SkillCard image={java} label="Java" />
        <SkillCard image={c} label="C" />
        <SkillCard image={cpp} label="C++" />
        <SkillCard image={haskell} label="Haskell" />
        {/* Add more */}
      </div>

    <h2 style={{ color: '#dddddd' }}>Database</h2>
      <div className="skills-grid">
        <SkillCard image={mysql} label="MySQL" />
   
        {/* Add more */}
      </div>

    <h2 style={{ color: '#dddddd' }}>Embedded System and Hardware</h2>
      <div className="skills-grid">
        <SkillCard image={arduino} label="Arduino" />

        {/* Add more */}
      </div>

    </section>
  );
};

export default SkillsSection;
