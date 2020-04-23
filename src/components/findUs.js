import React from 'react';

import { colors, pxToRem } from '../theme/helpers';

import map from '../images/map.png';

import styled from 'styled-components';
import './style.scss';

const FindUs = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Nous trouver</h2>

      <a href="https://goo.gl/maps/NLDzBV8N3Qf8wB9E8" target="_blank" rel="noopener noreferrer">          
      <h4 className="title is-size-4">Voir sur Google Maps</h4>
        <div className="image">
        </div>
      </a>
    </div>
  );
}

export default styled(FindUs)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
  .image {
    background: url(${map}) center/cover no-repeat;
    height: 20rem;
    &:hover {
      background: url(${map}) center/cover no-repeat rgba(232, 232, 232, 0.5);
      opacity: 0.4;
      transition: 0.3s;
    }
  }
  h4 {
    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    width: 100rem;
    opacity: 0;
    transition: 0.3s;
  }
  a {
    position: relative;

  }
  a:hover h4 {
      opacity: 1;
    }
`;