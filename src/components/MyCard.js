import React from 'react';
import styled from 'styled-components';
import { useTheme } from "../ThemeContext";

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const CardBefore = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://via.placeholder.com/300x200');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  z-index: 1;

  ${Card}:hover & {
    transform: scale(5) translate(50px, 50px);
    filter: blur(10px);
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 2;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const CardSubtitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const CardDescription = styled.div`
  position: absolute;
  top: 250px;
  right: -110%;
  width: 90%;
  padding: 10px;
  color: white;
  border-radius: 10px;
  transition: right 0.5s ease;
  z-index: 2;

  ${Card}:hover & {
    right: 0;
  }
`;

const CardLink = styled.div`
  position: absolute;
  bottom: -50px;
  right: 20px;
  color: aliceblue;
  transition: bottom 0.5s ease;
  z-index: 2;

  ${Card}:hover & {
    bottom: 20px;
  }
`;

export const MyCard = (props) => {
  const { theme } = useTheme();
  return (
    <Card>
      <CardBefore />
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </CardContent>
      <CardDescription>
        {props.description}
      </CardDescription>
      <CardLink>
        <a href={props.link}>More</a>
      </CardLink>
    </Card>
  );
};