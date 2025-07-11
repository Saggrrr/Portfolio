import React from "react";
import ProjectCard from "./ProjectCard";

// import project images
import proj1 from "../assets/proj_img/AI.jpeg";
import proj2 from "../assets/proj_img/youtube.jpeg";
import proj3 from "../assets/proj_img/hotel.jpeg";
import proj4 from "../assets/proj_img/recipe.jpeg";

const ProjectSection = () => {
  return (
    <section>
      <h2 style={{ color: '#dddddd' }}>Projects</h2>
      <div className="project-list">
        <ProjectCard
          image={proj1}
          title="Deep Learning-Based Early Diagnostic System for Prostate Cancer"
          description="A project that focuses on building an early diagnostic system using deep learning. It integrates histopathological images and gene expression data, achieving 96.85% accuracy using datasets from the Genomic Data Commons."
          link="https://example.com/weather"
        />
        <ProjectCard
          image={proj2}
          title="YouTube Comment Emotion Detection Using NLP"
          description="This project uses Natural Language Processing to analyze YouTube comments and identify the emotional tone of users. It aims to understand public sentiment through automated text analysis. Work is currently in progress."
          link="https://example.com/weather"
        />
        <ProjectCard
          image={proj3}
          title="HomeLand: Hotel Booking Website"
          description="An ongoing project focused on building a responsive hotel room booking site using HTML, CSS, and JavaScript. Key features include room selection, a booking form, and a dynamic UI."
          link="https://example.com/weather"
        />
        <ProjectCard
          image={proj4}
          title="Smart Recipe Finder Web App (Ongoing)"
          description="A practical project that helps users find recipes based on the ingredients they have. It features an input system for ingredients, recipe suggestions with images, and optional filters like vegetarian or vegan. The goal is to make cooking easier and reduce food waste."
          link="https://example.com/weather"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
