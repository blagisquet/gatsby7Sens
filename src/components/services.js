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
          <p className="is-size-4 serv has-text-weight-bold">Séance enregistrement <br /> (avec ingénieur du son)</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">2 heures: 80€<br />
              ½ journée (4h) : 160€<br />
              1 journée (8h) : 280€<br />
              Forfait 5 jours : 1320€<br />
              Forfait 10 jours 2620€<br />
            </p>
            <p>Re-recording (instrument par instrument) ou live (par sections d’instruments)</p>
          </div>
        </div>
        <div className="column">
          <img src={mix} alt="mixage" />
          <p className="is-size-4 serv has-text-weight-bold">Edition / Mixage</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">Mixage simple</p>
            <p className="has-text-weight-bold">120€ par titre </p>
            <p className="serv">Pas d'édition ni de correction de notes <br />
            Mixage à l'essentiel <br />
            16 pistes maxi par titre <br />
            Démo | Maquette | Pré-prod
            </p>
            <p className="has-text-weight-bold">Mixage premium</p>
            <p className="has-text-weight-bold">200€ par titre* </p>
            <p>Nettoyage et édition des pistes <br />
            Correction des notes <br />
            Mixage comple <br />
            Démo | Maquette | Pré-prod <br />
            *Tarif évolutif en fonction du nombre de pistes <br />
            Single | EP | Album
            </p>
            <p>Possibilité de mixage à distance si vous avez enregistré dans un autre studio</p>
          </div>
        </div>
        <div className="column">
          <img src={mastering} alt="mastering" />
          <p className="is-size-4 serv has-text-weight-bold">Mastering</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">Mastering stéréo: 45€/titre <br />
          Mastering stems : 80€/titre
</p>
            <p className="serv">Cette étape est réalisée par un studio de mastering partenaire extérieur ou celui de votre choix.</p>
             <p className="has-text-weight-bold">Location du studio <br />
            (avec assistant)</p>
            <p className="has-text-weight-bold">30€ par heure</p>
            <p>Pour tout projet d'enregistrement avec un ingénieur du son extérieur au studio, merci de nous contacter</p>       
          </div>
        </div>
        <div className="column">
          <img src={rapper} alt="rap" />
          <p className="is-size-4 serv has-text-weight-bold">Enregistrement concerts</p>
          <div className="is-size-5">
            <p className="has-text-weight-bold">Forfait 800€</p>
            <p>Nous connectons notre enregistreur 32 pistes aux sorties de la table de mixage de sonorisation sur place : chaque instrument est enregistré séparément. Nous procédons ensuite à 2 jours de mixage au studio. </p>
            <p className="serv">Pour des enregistrements de concerts d'orchestres acoustiques non sonorisés, merci de nous contacter.</p>
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