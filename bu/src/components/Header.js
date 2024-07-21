import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => (theme === 'light' ? '#f8f9fa' : '#343a40')};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <Nav>
    <h1>Arjun Suresh</h1>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  </Nav>
);

export default Header;
