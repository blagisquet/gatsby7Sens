import React from 'react';

import { colors } from '../theme/helpers';

import map from '../images/map.png';

import styled from 'styled-components';
import './style.scss';

const FindUs = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Nous trouver</h2>
      <a href="https://goo.gl/maps/NLDzBV8N3Qf8wB9E8" target="_blank" rel="noopener noreferrer">
        <img src={map} alt="carte emplacement du studio" />
      </a>
    </div>
  );
}

export default styled(FindUs)`
  img:hover {
    opacity: 0.5;
  }
`;