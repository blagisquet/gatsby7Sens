import React, { Fragment } from 'react';
import { pxToRem } from '../theme/helpers';
import styled from 'styled-components';

import { Link } from 'gatsby';

import mix from '../images/mix2.jpg';

import './style.scss';

const Studio = ({ className }) => {
  return (
    <Fragment>
      <div className={className}>
        <section id="studio">
          <h2 className="is-size-2 has-text-centered">Le studio</h2>
          <div className="text is-size-5 has-text-justified">
            <p>
              Le Studio Septième Sens réalise l’ensemble des étapes de votre enregistrement audio : prise de son, mixage, mastering.
            </p>
            <p>
              En plein cœur de Châteauroux, Louis l’ingénieur du son vous accueille dans des locaux de 45m2
              composés d’une régie et de deux cabines acoustiquement irréprochables.
            </p>
            <p>
              Enregistrement live, instrument par instrument (re-recording), cover, création de jingle, publicités d’entreprise,
              captation de concert, le studio s’adapte à vos besoins et à tous les styles.
            </p>
            <p>
              Doté d’un équipement haut de gamme et dernier cri, tout est mis en œuvre pour créer un confort de travail à la hauteur de vos exigences.
              Les tarifs avantageux assurent l’accès à un enregistrement professionnel pour tous, et les sessions sont aménageables selon vos habitudes et vos envies.
            </p>
          </div>
        </section>
        <section className="hero image">
          <div className="hero-body twisted">
            <div className="container has-text-centered">
              {/* <p className="title is-2 has-text-centered"></p>
              <button className="button is-danger is-medium is-fullwidth-mobile"><Link to="#medias" className="has-text-light">Voir +</Link></button> */}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default styled(Studio)`
  h2 {
    margin-top: ${pxToRem(24)};
  }
  .text {
    margin: 1rem 1rem;
  }
  .image {
    /* background: url(${mix}) center center no-repeat !important; */
    background: url(${mix}) center center no-repeat;
  }
  .container {
    margin-top: 250px;
  }
`;