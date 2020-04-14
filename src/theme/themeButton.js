import React, {useState} from 'react';
import styled from 'styled-components';

import  { colors, pxToRem } from './helpers';

const ThemeButton = ({ className, handleTheme }) => {
  const [theme, setTheme ] = useState('🌙');

  const handleClick = () => {
    handleTheme();
    theme === '🌙' ? setTheme('☀️') : setTheme('🌙');
  }

  return (
    <button onClick={handleClick} className={className}>
      <span role="img" aria-label="Thème">{theme}</span>
    </button>
  )
}

export default styled(ThemeButton)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.accent};
  border-radius: 50%;
  border: 0;
  font-size: ${pxToRem(24)};
  cursor: pointer;
  margin: $${pxToRem(8)};
`;