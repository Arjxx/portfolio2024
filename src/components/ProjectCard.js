import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext';

const Card = styled.div`
  background: ${({ theme }) => (theme.mode === 'light' ? '#fff' : '#444')};
  color: ${({ theme }) => (theme.mode === 'light' ? '#000' : '#fff')};
  border: 1px solid ${({ theme }) => (theme.mode === 'light' ? '#ddd' : '#555')};
  padding: 1em;
  margin: 1em 0;
  border-radius: 8px;
`;

const ProjectCard = ({ title, description, technologies }) => {
  const { theme } = useTheme();

  return (
    <Card theme={{ mode: theme }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies Used:</strong> {technologies}</p>
    </Card>
  );
};

export default ProjectCard;
