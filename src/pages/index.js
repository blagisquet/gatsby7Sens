import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import ThemeButton from '../theme/themeButton';
import { lightTheme, darkTheme } from '../theme/themes';

const IndexPage = () => {
  const [theme, setTheme] = useState(darkTheme);

  const handleTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeButton handleTheme={handleTheme} />
      <Layout />
    </ThemeProvider>
  )
};

export default IndexPage;
