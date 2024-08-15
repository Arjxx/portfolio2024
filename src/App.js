import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import "./components/style.css";
const Container = styled.div`
  padding:0px;

@media (max-width: 768px) {

}
@media (max-width: 992px) {

}
@media (max-width: 1200px) {
  }
`;
const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <GlobalStyles />
      <Router>
        <Header />
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
       </Container> <Footer />
      </Router>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
