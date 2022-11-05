import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Theme from './styles/theme';
import Router from './components/Router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
