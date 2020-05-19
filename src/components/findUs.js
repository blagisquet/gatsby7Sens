import React from 'react';

import { pxToRem } from '../theme/helpers';

import map from '../images/map.png';
import mapMob from '../images/mapMob.png';

import styled from 'styled-components';
import './style.scss';

const FindUs = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Nous trouver</h2>
      <a className="tile" href="https://goo.gl/maps/NLDzBV8N3Qf8wB9E8" target="_blank" rel="noopener noreferrer">
        <div className="imageDesk is-hidden-mobile"></div>
        <div className="imageMob is-hidden-tablet"></div>
        <div className="info">
          <div className="textHover is-size-3">Voir sur Google Maps</div>
        </div>
      </a>
      <span id="contact"></span>
    </div>
  );
}

export default styled(FindUs)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(40)}
  }

  a {
    margin-top: 1rem;
  }

  .tile:hover .imageDesk {
    opacity: 0.3;
  }

  .tile:hover .imageMob {
    opacity: 0.3;
  }

  .imageMob {
    background: url(${mapMob}) center/cover no-repeat;
    height: 20rem;
    opacity: 1;
    display: block;
    width: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .imageDesk {
    background: url(${map}) center/cover no-repeat;
    height: 20rem;
    opacity: 1;
    display: block;
    width: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
  }
`;