import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Banner } from '../components/Banner';

const Home = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>Innovative web developer with 2+ years of experience in creating user-centric websites and applications.</p>
    <h2>Projects</h2>
    <Banner></Banner>
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

export default Home;
