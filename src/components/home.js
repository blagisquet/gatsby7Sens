import React from 'react';

import Hero from '../theme/hero';

import { colors } from '../theme/helpers';

import styled from "styled-components";

import './style.scss';

const home = ({ className }) => {
  return (
  <Hero>
    <section className={className} id="accueil">
      <h1 className="is-invisible">Studio Septième Sens</h1>
      <a href="#studio"><span className="icon">
        <i className="fas fa-2x fa-arrow-circle-down is-hidden-tablet"></i>
        <i className="fas fa-3x fa-arrow-circle-down is-hidden-mobile"></i>
        </span></a>
    </section>
  </Hero>
  );
}

export default styled(home)`
  span {
    position: absolute;
    top: 95vh;
    left: 49%;
    transform: scale(1);
    animation: pulse 5s ease infinite;
    @media (min-width:501px) and (max-width: 768px){
      top: 90vh;
      left: 48%;
    }
    @media (max-width:500px) {
      top: 90vh;
      left: 46%;
    }
  }
  .fas {
    color: white;
    &:hover {
      color: ${colors.primary};
    }
  }
  @keyframes pulse {
    0% {
    transform:scale(1);
    }
    5% {
      transform:scale(1.25);
    }
    20% {
      transform:scale(1);
    }
    30% {
      transform:scale(1);
    }
    35% {
      transform:scale(1.25);
    }
    50% {
      transform:scale(1);
    }
    55% {
      transform:scale(1.25);
    }
    70% {
      transform:scale(1);
    }
  }
`;