import React from 'react';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { pxToRem } from '../theme/helpers';

const Medias = ({ className }) => {
  return (
    <div className={className}>
      <section className="hero image">
        <div className="hero-body twisted">
          <div className="container has-text-centered">
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default styled(Medias)`
   .image {
    background: url(${loulou}) center/cover no-repeat;
  }
  .container {
    margin-top: 250px;
  }
  .hero {
    margin-top: ${pxToRem(48)};
  }
`;