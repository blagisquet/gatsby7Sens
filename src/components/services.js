import React from 'react';

import styled from 'styled-components';
import './style.scss';

import record from '../images/mic.svg';
import mastering from '../images/equalizer.svg';
import mix from '../images/amplifier.svg';
import { pxToRem } from '../theme/helpers';



const Services = ({ className }) => {
  return (
    <div className={className} id="services">
      <h2 className="is-size-2 has-text-centered">Les services</h2>
      <div className="columns has-text-centered services">
        <div className="column">
          <img src={record} alt="enregistrement" />
          <p className="is-size-4 has-text-weight-semibold">Enregistrement</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">à partir de 30€/h</p>
            <p>½ journée (4h) : 120€</p>
            <p>1 journée (8h) : 200€</p>
            <p>Re-recording (instrument par instrument) ou live (par sections d’instruments)</p>
          </div>
        </div>
        <div className="column">
          <img src={mix} alt="mixage" />
          <p className="is-size-4 has-text-weight-semibold">Mixage</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">à partir de 120€/titre</p>
            <p>Le tarif du mixage évoluera en fonction de la complexité du projet (exigences, nombre de pistes)</p>
            <p>Possibilité de e-mixage (à distance) si vous avez enregistré dans un autre studio.</p>
          </div>
        </div>
        <div className="column">
          <img src={mastering} alt="mastering" />
          <p className="is-size-4 has-text-weight-semibold">Mastering</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">stéréo : 42€/titre <br />
          stems : 78€/titre</p>
            <p>Cette dernière étape cruciale fait entrer vos productions dans les normes d’écoute et de diffusion,
            pour une sortie digitale ou en vue d’une fixation sur un support.</p>
            <p>Possibilité de e-mastering (à distance).</p>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default styled(Services)`
  img {
    width: 100px;
  }
  .services {
    margin-top: ${pxToRem(20)};
  }
`;