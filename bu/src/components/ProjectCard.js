import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#ddd' : '#555')};
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
`;

const ProjectCard = ({ title, description, technologies }) => (
  <Card>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Technologies Used:</strong> {technologies}</p>
  </Card>
);

export default ProjectCard;
