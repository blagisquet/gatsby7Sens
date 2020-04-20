import React from 'react';
import { pxToRem } from '../theme/helpers';
import styled from 'styled-components';

import Twisted from '../theme/twisted';

import mix from '../images/mix2.jpg';

import './style.scss';

const Studio = ({ className }) => {
  return (
    <div className={className}>
      <section id="studio">
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Le studio</h2>
        <div className="text is-size-5 has-text-justified">
          <p>
            Le Studio Septième Sens réalise l’ensemble des étapes de votre enregistrement audio : <span className="has-text-weight-semibold">prise de son, mixage, mastering</span>.
            </p>
          <p>
            En plein cœur de Châteauroux, Louis l’ingénieur du son vous accueille dans des locaux de 45m2
              composés d’une régie et de deux cabines <span className="has-text-weight-semibold">acoustiquement irréprochables</span>.
            </p>
          <p>
            Enregistrement live, instrument par instrument (re-recording), cover, création de jingle, publicités d’entreprise,
            captation de concert, le studio s’adapte à vos besoins et à tous les styles.
            </p>
          <p>
            Doté d’un équipement <span className="has-text-weight-semibold">haut de gamme et dernier cri</span>, tout est mis en œuvre pour créer un confort de travail à la hauteur de vos exigences.
              Les tarifs avantageux assurent l’accès à un enregistrement professionnel pour tous, et les sessions sont aménageables selon vos habitudes et vos envies.
            </p>
        </div>
      </section>
      <Twisted />
    </div>
  );
};

export default styled(Studio)`
  h2 {
    margin-top: ${pxToRem(48)};
  }
  .text {
    margin: 1rem 1rem;
  }
  .image {
    background: url(${mix}) center/cover no-repeat;
  }
  .container {
    margin-top: ${pxToRem(250)};
  }
  .hero {
    margin-top: ${pxToRem(48)};
  }
  p {
    margin-bottom: ${pxToRem(12)};
  }
`;