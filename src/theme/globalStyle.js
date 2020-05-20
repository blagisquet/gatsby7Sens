import { createGlobalStyle } from 'styled-components';
import { colors } from './helpers';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${colors.black};
    color: ${colors.white};
  }

  body {
    font-size: 16px;
    transition: 600ms;
    color: ${({ theme }) => theme.frontColor};
    background: ${({ theme }) => theme.backgroundColor};
  }

  .bolder {
    font-weight: 900;
  }

  .bold {
    font-weight: 600;
  }

  .accent {
    color: ${colors.accent};
  }
`;

export default GlobalStyle;