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
          <figure className="image is-rounded">
            <img src={logo} alt="logo studio septième sens" />
          </figure>
          <div className="address">
            <p>10 rue Pérard</p>
            <p>36000 Châteauroux</p>
            <p>SIRET 1253468574878695456</p>
          </div>
        </div>
        <div className="menu column is-one-third">
          <ul className="menu-list">
            <Link to="#" className="menuLink"><li>Accueil</li></Link>
            <Link to="#studio" className="menuLink"><li>Le studio</li></Link>
            <Link to="#services" className="menuLink"><li>Les services</li></Link>
            <Link to="#medias" className="menuLink"><li>Médias</li></Link>
            <Link to="#avis" className="menuLink"><li>Avis</li></Link>
            <Link to="#map" className="menuLink"><li>Nous trouver</li></Link>
            <Link to="#contact" className="menuLink"><li>Contact</li></Link>
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
`;
