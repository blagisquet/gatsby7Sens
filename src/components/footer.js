import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import './style.scss';

import { colors, pxToRem } from '../theme/helpers';

import logo from '../images/logo.png';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="columns is-mobile has-background-grey-darker has-text-light">
        <div className="column is-two-thirds">
          <figure className="image">
            <img src={logo} alt="logo studio septième sens" />
          </figure>
          <div className="address">
            <p>10 rue Pérard</p>
            <p>36000 Châteauroux</p>
            <p>SIRET 80267266700028</p>
          </div>
          <a className="reseaux" href="https://www.facebook.com/studioseptiemesens/?ref=ts&fref=ts" target="_blank" rel="noopener noreferrer">
            <span className="icon is-large"><i className="fab fa-facebook fa-2x"></i></span>
          </a>
          <a className="reseaux" href="https://www.instagram.com/studioseptiemesens/?hl=fr" target="_blank" rel="noopener noreferrer">
            <span className="icon is-large"><i className="fab fa-instagram fa-2x"></i></span>
          </a>
          <a className="reseaux" href="https://twitter.com/studio7esens" target="_blank" rel="noopener noreferrer">
            <span className="icon is-large"><i className="fab fa-twitter fa-2x"></i></span>
          </a>
        </div>
        <div className="menu column is-one-third">
          <ul className="menu-list">
            <a href="#" className="menuLink"><li>Accueil</li></a>
            <a href="#studio" className="menuLink"><li>Le studio</li></a>
            <a href="#services" className="menuLink"><li>Les services</li></a>
            <a href="#medias" className="menuLink"><li>Médias</li></a>
            <a href="#avis" className="menuLink"><li>Avis</li></a>
            <a href="#map" className="menuLink"><li>Nous trouver</li></a>
            <a href="#contact" className="menuLink"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default styled(Footer)`
  .menuLink {
    color: white;
		&:hover {
			background-color: hsl(0, 0%, 21%);
			color: ${colors.primary};
		}
  }
  .address {
    margin-left: ${pxToRem(15)};
  }
  img {
    width: 50%;
  }
  i {
    color: ${colors.white};
    margin-left: ${pxToRem(16)};
    &:hover {
      color: ${colors.primary};
    }
  }
`;
