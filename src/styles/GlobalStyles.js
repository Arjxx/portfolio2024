import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  padding: 0 ;
  margin:0;
    background-color: ${({ theme }) => (theme.mode === 'dark' ? '#000' : '#fff')};
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#000')};
    transition: all 0.3s ease;
  }
`;

export default GlobalStyles;
