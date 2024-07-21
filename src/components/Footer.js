import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => (theme === "light" ? "#f8f9fa" : "#343a40")};
  padding: 1em;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

  
  bottom: 0;
`;

const d = new Date();
const year = d.getFullYear();
const Footer = () => (
  <FooterContainer>
    <p>&copy; {year} Arjun Suresh. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
