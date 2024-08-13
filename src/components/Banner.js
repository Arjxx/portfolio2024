import React from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";

const BannerWrapper = styled.div`
  display: grid;
  height: auto;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#282c34")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "white")};
  padding: 20px;
`;

const BannerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  grid-template-areas: "b-col-1 b-col-2";
  gap:20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "b-col-2"
      "b-col-1";
  }
`;

const BannerImgdiv = styled.div`
  grid-area: b-col-2;
  width:100%;
  height:300px;
  background-color:red;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  grid-area: b-col-1;
   width:100%;
   height:300px;
  background-color:red;
`;

const BannerTextH1 = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const BannerTextP = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 0;
`;

const BannerImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Banner = () => {
  const { theme } = useTheme();

  return (
    <BannerWrapper theme={theme}>
      <BannerContent>
        <BannerText>
          <BannerTextH1>Your Name</BannerTextH1>
          <BannerTextP>Web Developer | Designer | Programmer</BannerTextP>
        </BannerText>
        <BannerImgdiv>
          <BannerImage src="your-image-url.jpg" alt="Your Name" />
        </BannerImgdiv>
      </BannerContent>
    </BannerWrapper>
  );
};
