import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import GlobalStyle from '../theme/globalStyle';
// import ThemeButton from '../theme/themeButton';
import { lightTheme, darkTheme } from '../theme/themes';

const IndexPage = () => {
  const [theme, setTheme] = useState(lightTheme);

  const handleTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeButton handleTheme={handleTheme} /> */}
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
};

export default IndexPage;
