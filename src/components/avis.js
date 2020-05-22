import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { pxToRem } from '../theme/helpers';

import styled from 'styled-components';

import './style.scss';

const Avis = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="has-text-centered has-text-weight-bold is-size-2">Avis</h2>
      <Carousel showStatus={false} emulateTouch={true} showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
        {/*FIrst page*/}
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title is-size-5">Loïc Loizeau</p>
              <p>“ J’ai passé une super journée en studio. Louis est très professionnel et n’hésite pas à prendre le temps nécessaire pour travailler le morceau.
              Les conditions d’enregistrement sont au top, lumière tamisée, micro d’excellente qualité, studio parfaitement insonorisé etc…
              Tout est fait pour être mis à l’aise. Le mixage ainsi que le mastering sont dignes d’un travail soigné et propre. Je le conseille vraiment.
                Prix attractifs en plus de ça ! Que du positif :) “</p>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title is-size-5">Goby</p>
              <p>“ Écoute attentive de la part de Louis envers l’artiste, des supers moments passés, du travail propre, une passion partagée ! “</p>
            </div>
            <div className="tile is-child box">
              <p className="title is-size-5">Cie Noura</p>
              <p>“ Louis est très pro, créatif et attentif :) “</p>
            </div>
          </div>
        </div>
        {/*Second page*/}
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title is-size-5">Simon Vachet</p>
              <p>“ Très bon accueil, très professionnel. Un bon moment de convivialité et de musique !... “</p>
            </div>
            <div className="tile is-child box">
              <p className="title is-size-5">Föze</p>
              <p>“ Super pro, à l’écoute, agréable et du bon matos, tout ce qu’il faut je recommande! “</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title is-size-5">Hana Ops</p>
              <p>“ J’ai enregistré mon premier EP avec Louis et c’était une expérience géniale que je recommande à tous. Louis est à l’écoute de ce que vous lui dites mais il sait aussi proposer de bonnes choses.
              Il met à l’aise immédiatement alors on se sent bien et c’est vraiment l’essentiel pour un bon enregistrement. Le lieu est sympa et atypique,
        le matériel au top et le rendu final après mixage et mastering est très professionnel. Bref, c’est vraiment un studio que je recommande à 100% ! “</p>
            </div>
          </div>
        </div>
      </Carousel>
      <span id="map"></span>
    </div>
  );
}

export default styled(Avis)`
  h2 {
   margin-top: ${pxToRem(48)};
   margin-bottom: ${pxToRem(24)}
}
  .is-ancestor {
    margin: 0 1rem 1rem 1rem;
  }
  .carousel .slide {
    background-color: white !important;
  }
  .carousel .control-dots {
    position: relative;
    margin: 0;
  }
`;