import React from "react";
import "./App.css";
import profilePic from './assets/profile_pic.png';
import CustomCursor from "./CustomCursor";
import SkillsSection from "./components/SkillSection";

import ProjectSection from "./components/ProjectSection";

import ContactSection from "./components/ContactSection";

import CertificationSection from "./components/CertificationSection";




function App() {
  return (
    <>
    <CustomCursor />
    <div className="container">
      {/* Navigation Bar */}
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#skills-section">Tech Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>  
        <a href="#Soft-skills">Soft Skills</a>
        <a href="#contact">Contact</a>
      </div>
      {/* Home Section */}
      <section className="page" id="home">
        <div className="split">
          <div className="left">
            <img src={profilePic} id="profile-pic" alt="Profile" style={{marginTop: '50px'}}/>
            <h1 style={{textAlign: "center"}}>AnanthaSagar</h1>
            <p style={{textAlign: "center"}}>Computer Science Student</p>
          </div>
<div className="right">
  <div className="bio-card">
    <h2 style={{ color: 'rgba(79, 123, 199, 0.8)' }}>About Me</h2>
    <p>
      I'm a Computer Science student with a strong passion for building clean, responsive, and user-friendly web interfaces.
      I enjoy working at the intersection of logic and creativity — turning ideas into well-crafted, accessible digital experiences that are both beautiful and functional.
    </p>
    <p>
      Currently, I’m focused on learning modern web technologies like React, JavaScript, and backend fundamentals. I love building personal projects that challenge my skills and help me grow as a developer.
    </p>
    <p>
      In the future, I hope to work on products that make a positive impact. When I’m not coding, I’m reading about tech, playing games, or exploring open-source projects for inspiration.
    </p>
  </div>
</div>

        </div>
      </section>



            {/* Skills Section */}
      <section className="page" id="skills-section">
        <div className="split">
          <div className="left">
            <h1 style={{textAlign: 'center'}}>Technology Skills</h1>
          </div>
          <div className="right">
              <SkillsSection/>
          </div>
        </div>
      </section>


{/* Projects Section */}
<section className="page" id="projects">
  <div className="split">
    <div className="left">
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
    </div>
    <div className="right">
      <ProjectSection />
    </div>
  </div>
</section>

{/* Education Section */}
<section className="page" id="education">
  <div className="split">
    <div className="left">
      <h1 style={{ textAlign: 'center' }}>Education</h1>
    </div>
    <div className="right">
      <div className="education-section">
  <h2 className="education-title">Education</h2>

  <div className="education-card">
    <div className="education-degree">🎓 Computer Science and Engineering</div>
    <div className="education-location">📍 Amrita Vishwa Vidyapeetham, Coimbatore, TamilNadu</div>
    <div className="education-year">📅 2023 - 2027</div>
  </div>

  <div className="education-card">
    <div className="education-degree">🎓 Higher Secondary Education</div>
    <div className="education-location">📍 PVS HSS, Eranhikkal, Calicut, Kerala</div>
    <div className="education-year">📅 2020 - 2022</div>
  </div>

  <div className="education-card">
    <div className="education-degree">🎓 Secondary Education (Class 10)</div>
    <div className="education-location">📍 MSS, Mavilikkadavu, Calicut, Kerala</div>
    <div className="education-year">📅 2019 - 2020</div>
  </div>
</div>


    </div>
  </div>
</section>



{/* Certifications Section */}
<section className="page" id="certifications">
  <div className="split">
    <div className="left">
      <h1 style={{ textAlign: 'center' }}>Certifications</h1>
    </div>
    <div className="right">
    <CertificationSection />
    </div>
  </div>
</section>



{/* Soft Skills */}
<section className="page" id="Soft-skills">
  <div className="split">
    <div className="left">
      <h1 style={{textAlign: 'center'}}>Soft Skills</h1>
    </div>
    <div className="right">
      <div className="soft-skills-grid">
        <div className="soft-skill-card">Leadership</div>
        <div className="soft-skill-card">Effective Communication</div>
        <div className="soft-skill-card">Teamwork & Collaboration</div>
        <div className="soft-skill-card">Problem Solving</div>
        <div className="soft-skill-card">Adaptability</div>
        <div className="soft-skill-card">Time Management</div>
      </div>
    </div>
  </div>
</section>



            {/* Contact Section */}
      <section className="page" id="contact">
        <div className="split">
          <div className="left">
            <h1 style={{textAlign: 'center'}}>Contact</h1>
          </div>
          <div className="right">

            <ContactSection />




          </div>
        </div>
      </section>





    </div>
    </>
  );
}

export default App;
