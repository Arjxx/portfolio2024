import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <div>
    <h1>My Projects</h1>
    <ProjectCard 
      title="Reporting System Website" 
      description="Developed a website to track Google keyword rankings and website backlinks, generating and emailing PDF reports to users."
      technologies="HTML, CSS, JavaScript, Bootstrap, PHP, Node.js"
    />
    <ProjectCard 
      title="MCQ System for Online Tests" 
      description="Developed an online system for users to take MCQ tests on various subjects and receive instant results."
      technologies="HTML, CSS, JavaScript, Bootstrap, PHP, MySQL"
    />
  </div>
);

export default Projects;
