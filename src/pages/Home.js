import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Banner } from '../components/Banner';
import { MyCardContainer } from '../components/MyCardContainer';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width:100%;

@media (min-width: 768px) {
    width: 750px;

}
@media (min-width: 992px) {
    width: 970px;

}
@media (min-width: 1200px) {
    width: 1170px;
  }
`;


// const Wrapper = styled.div`
//   width: 100%;
//   padding-right: 15px; 
//   padding-left: 15px;  
//   margin-right: auto;
//   margin-left: auto;

// @media (min-width: 576px) {
//     max-width: 540px;
  
// }

// @media (min-width: 768px) {
//     max-width: 720px;
//   }

// @media (min-width: 992px) {
//     max-width: 960px;
  
// }

// @media (min-width: 1200px) {
//     max-width: 1140px;
  
// }

// @media (min-width: 1400px) {
//     max-width: 1320px;
  
// }
// `;
const Home = () => (
  <div>
    {/* <h1>Welcome to My Portfolio</h1>
    <p>Innovative web developer with 2+ years of experience in creating user-centric websites and applications.</p>
    <h2>Projects</h2> */}
      <Banner></Banner>
      <MyCardContainer />

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
