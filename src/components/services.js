import React from 'react';

import styled from 'styled-components';
import './style.scss';

import record from '../images/mic.svg';
import mix from '../images/equalizer.svg';
import mastering from '../images/amplifier.svg';
import rapper from '../images/rapper.svg';
import { pxToRem } from '../theme/helpers';



const Services = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Services</h2>
      <div className="columns has-text-centered services">
        <div className="column">
          <img src={record} alt="enregistrement" />
          <p className="is-size-4 serv has-text-weight-bold">Tarif horaire <br /> (avec ingénieur du son)</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">à partir de 40€/h<br />
              ½ journée (4h) : 140€<br />
              1 journée (8h) : 240€<br />
              Forfait 5 jours : 1080€<br />
              Forfait 10 jours 2130€<br />
            </p>
            <p>Re-recording (instrument par instrument) ou live (par sections d’instruments)</p>
          </div>
        </div>
        <div className="column">
          <img src={mix} alt="mixage" />
          <p className="is-size-4 serv has-text-weight-bold">Mixage</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">à partir de 120€/titre</p>
            <p>Le tarif du mixage évoluera en fonction de la complexité du projet (exigences, nombre de pistes)</p>
            <p>Possibilité de e-mixage (à distance) si vous avez enregistré dans un autre studio.</p>
          </div>
        </div>
        <div className="column">
          <img src={mastering} alt="mastering" />
          <p className="is-size-4 serv has-text-weight-bold">Mastering</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">Mastering stéréo: 45€/titre <br />
            Cette étape est réalisée par un studio de mastering partenaire extérieur.<br />
          Mastering 2 stems (travail sur 2 sous-groupes : instru et voix): 60€/titre<br />
          Mastering 8 stems (travail sur 8 sous-groupes maximum de sections d’instruments):
80€ /titre
</p>
            <p>Cette dernière étape cruciale fait entrer vos productions dans les normes d’écoute et de diffusion,
            pour une sortie digitale ou en vue d’une fixation sur un support.</p>
            <p>Possibilité de e-mastering (à distance).</p>
          </div>
        </div>
        <div className="column">
          <img src={rapper} alt="rap" />
          <p className="is-size-4 serv has-text-weight-bold">Forfait Rap / Cover</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">instru stéréo : 180€/titre <br />
          instru multipiste : 220€/titre</p>
            <p>L'artiste apporte le fichier instrumental sur clé USB au format WAV (nous recommandons d’éviter le MP3).
</p>
          </div>
        </div>
        <span id="materiel"></span>
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
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
  .serv {
    margin-bottom: ${pxToRem(12)};
  }
`;