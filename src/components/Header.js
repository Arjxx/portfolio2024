import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../ThemeContext';

const Nav = styled.nav`
  background: ${({ theme }) => (theme.mode === 'light' ? '#f8f9fa' : '#343a40')};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  z-index:999;
  width:100%;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => (theme.mode === 'light' ? '#000' : '#fff')};
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const { theme } = useTheme();

  return (
    <Nav theme={{ mode: theme }}>
      <h1>Arjun Suresh</h1>
      <div>
        <NavLink theme={{ mode: theme }} to="/">Home</NavLink>
        <NavLink theme={{ mode: theme }} to="/about">About</NavLink>
        <NavLink theme={{ mode: theme }} to="/projects">Projects</NavLink>
      </div>
      <ThemeToggle />
    </Nav>
  );
};

export default Header;
