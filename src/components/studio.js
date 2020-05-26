import React from 'react';
import { pxToRem } from '../theme/helpers';
import styled from 'styled-components';

import mix from '../images/mix2.jpg';

import './style.scss';

const Studio = ({ className }) => {
  return (
    <div className={className}>
      <section>
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Le studio</h2>
        <div className="text is-size-5 has-text-centered-desktop has-text-justified-touch">
          <p>
            Le Studio Septième Sens réalise l’ensemble des étapes de votre enregistrement audio : <span className="has-text-weight-semibold">prise de son, mixage, mastering</span>.
            </p>
          <p>
            En plein cœur de <span className="has-text-weight-semibold">Châteauroux</span>, Louis, l’ingénieur du son, vous accueille dans des locaux de 45m2
              composés d’une régie et de deux cabines <span className="has-text-weight-semibold">acoustiquement irréprochables</span>.
            </p>
          <p>
            Enregistrement live, instrument par instrument (re-recording), cover, création de jingle, publicités d’entreprise,
            captation de concert, le studio s’adapte à vos besoins et à <span className="has-text-weight-semibold">tous les styles</span>.
            </p>
          <p>
            Grâce à un équipement <span className="has-text-weight-semibold">haut de gamme et dernier cri</span>, tout est mis en œuvre pour créer un confort de travail à la hauteur de vos exigences.
              Les <span className="has-text-weight-semibold">tarifs avantageux</span> assurent l’accès à un enregistrement professionnel pour toutes et tous, et les sessions sont aménageables selon vos habitudes et vos envies.
            </p>
        </div>
      </section>
      <section className="hero image">
        {/* <div className={theme === 'dark' ? 'hero-body twisted-black' : 'hero-body twisted-white'}> */}
        <div className="hero-body twisted">
          <div className="container has-text-centered">
            {/* <p className="title is-2 has-text-centered"></p>
              <button className="button is-danger is-medium is-fullwidth-mobile"><Link to="#medias" className="has-text-light">Voir +</Link></button> */}
          </div>
        </div>
        <span id="services"></span>
      </section>
    </div>
  );
};

export default styled(Studio)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
  @media screen and (max-width:1023px) {
    .text {
      margin: 1rem 1rem;
    }
  }
  @media screen and (min-width:1024px) and (max-width:1939px) {
    .text {
      margin: 1rem 10rem;
    }
  }
  @media screen and (min-width:1940px) {
    .text {
      margin: 1rem 25rem;
    }
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