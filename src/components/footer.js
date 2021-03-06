import React from 'react';

import styled from 'styled-components';
import './style.scss';

import { colors, pxToRem } from '../theme/helpers';

import logo from '../images/logo.png';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="container is-fluid has-background-grey-darker has-text-light">
        <div className="columns is-mobile">
          <div className="column is-hidden-mobile has-text-centered sept">
            <figure className="image">
              <img src={logo} alt="logo studio septième sens" />
            </figure>
            <div className="reseaux columns">
              <a href="https://www.facebook.com/studioseptiemesens/?ref=ts&fref=ts" className="column" target="_blank" rel="noopener noreferrer">
                <span className="icon is-large"><i className="fab fa-facebook fa-2x"></i></span>
              </a>
              <a href="https://www.instagram.com/studioseptiemesens/?hl=fr" className="column" target="_blank" rel="noopener noreferrer">
                <span className="icon is-large"><i className="fab fa-instagram fa-2x"></i></span>
              </a>
              <a href="https://twitter.com/studio7esens" className="column" target="_blank" rel="noopener noreferrer">
                <span className="icon is-large"><i className="fab fa-twitter fa-2x"></i></span>
              </a>
              <div className="column"></div>
            </div>
          </div>
          <div className="column is-hidden-mobile">
            <a href="https://goo.gl/maps/NLDzBV8N3Qf8wB9E8" target="_blank" rel="noopener noreferrer" className="address">
              <p>10 rue Pérard</p>
              <p>36000 Châteauroux</p>
              <p>SIRET 80267266700028</p>
            </a>
          </div>
          <div className="menu column">
            <ul className="menu-list">
              <a href="#accueil" className="menuLink"><li>Accueil</li></a>
              <a href="#studio" className="menuLink"><li>Le studio</li></a>
              <a href="#services" className="menuLink"><li>Les services</li></a>
            </ul>
          </div>
          <div className="menu column">
            <ul className="menu-list">
              <a href="#medias" className="menuLink"><li>Médias</li></a>
              <a href="#avis" className="menuLink"><li>Avis</li></a>
              <a href="#map" className="menuLink"><li>Nous trouver</li></a>
            </ul>
          </div>
        </div>
        <div className="is-hidden-tablet columns has-text-centered is-mobile">
          <a className="column" href="https://www.facebook.com/studioseptiemesens/?ref=ts&fref=ts" target="_blank" rel="noopener noreferrer">
            <span className="icon is-small"><i className="fab fa-facebook fa-2x"></i></span>
          </a>
          <a className="column" href="https://www.instagram.com/studioseptiemesens/?hl=fr" target="_blank" rel="noopener noreferrer">
            <span className="icon"><i className="fab fa-instagram fa-2x"></i></span>
          </a>
          <a className="column" href="https://twitter.com/studio7esens" target="_blank" rel="noopener noreferrer">
            <span className="icon"><i className="fab fa-twitter fa-2x"></i></span>
          </a>
        </div>
        <div className="has-text-centered made">
          <a href="https://www.linkedin.com/in/baptiste-lagisquet-bb2a8937/" target="_blank" className="made" rel="noopener noreferrer">Made with <span className="icon"><i className="fas fa-music"></i></span>  <span className="cv"><br className="is-hidden-tablet" />by Baptiste Lagisquet</span></a>
        </div>
      </div>
    </div>
  );
}

export default styled(Footer)`
  .container {
    margin-top: ${pxToRem(48)};
    padding-bottom: 1rem;
  }
  .menuLink {
    color: white;
		&:hover {
			background-color: hsl(0, 0%, 21%);
			color: ${colors.primary};
		}
  }
  .address {
    color: white;
    &:hover {
      color: ${colors.primary};
    }
    p {
      padding-top: 0.6em;
    }
  }
  img {
    width: 50%;
  }
  i {
    color: ${colors.white};
    &:hover {
      color: ${colors.primary};
    }
  }
  .cv {
    color: ${colors.primary};
  }
  .sept {
    margin-left: 1rem;
  }
  .image {
    @media (max-width: 1050px) {
      margin-left: 25%;
    }
    @media (min-width: 1051px) and (max-width: 1200px) {
      margin-left: 20%;
    }
    margin-left: 15%;
  }
  .made {
    color: white;
    &:hover {
      color: ${colors.primary} !important;
    }
  }
  .fa-music {
    color: white;
  }
  @media screen and (min-width:425px) and (max-width:574px) {
    .menu {
      margin-left: 5%;
    }
  }
  @media screen and (min-width:575px) and (max-width:768px) {
    .menu {
      margin-left: 15%;
    }
  }
`;
