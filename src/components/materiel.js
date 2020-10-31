import React from 'react';

import styled from 'styled-components';
import './style.scss';

import { pxToRem } from '../theme/helpers';

const Materiel = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Matériel</h2>
      <div className="columns has-text-centered">
        <div className="column is-one-third">
          <ul>
            <li className="mat has-text-weight-bold is-size-4">Console / Preamps</li>
            <li>Digidesign C24 Surface de contrôle  motorisée</li>
            <li>SSL XLogic Alpha VHD pre (4 canaux)</li>
            <li>Focusrite ISA 828 (8 canaux)</li>
            <li>Yamaha MLA8 (8 canaux)</li>
          </ul>
          <ul>
            <li className="mat has-text-weight-bold is-size-4">Micros</li>
            <li>Brauner Phantera</li>
            <li>Neumann KM184(x2)</li>
            <li>Rode NT5(x2)</li>
            <li>AKG C414(x2)/C214(x2)/C535</li>
            <li>T.bone RB500 (ruban)</li>
            <li>Electrovoice RE20</li>
            <li>Sennheiser MD421(x2)</li>
            <li>Beyerdynamic M88</li>
            <li>Audix D4</li>
            <li>Shure SM57(x6)/Beta57/Beta52/Beta91</li>
            <li>DI BSS AR133(x10)</li>
            <li>Radial Pro-RMP reamper</li>
          </ul>
        </div>
        <div className="column is-one-third">
          <ul>
            <li className="mat has-text-weight-bold is-size-4">Logiciel / Plug-in</li>
            <li>Pro Tools Ultimate 2020</li>
            <li>Logic Pro X</li>
            <li>Ableton Live</li>
            <li>Hofa CD Burn DDP master</li>
            <li></li>
            <li>Plug-ins UAD SSL/Pultec/Teletronix/...</li>
            <li>Plug-ins WAVES Kramer/C1/C4/H-serie/R-serie/...</li>
            <li>Melodyne Assistant</li>
            <li>Antares Autotune pro</li>
          </ul>
          <ul>
            <li className="mat has-text-weight-bold is-size-4">Convertisseurs / Workflow</li>
            <li>Avid Pro Tools HDX 16x16 system</li>
            <li>Apple Mac Pro 2014</li>
            <li>Hexacoeur à 3,5Ghz avec 12Mo de cache N3</li>
            <li>32 Go de mémoire DDR3 à 1866Mhz</li>
            <li>Disque SSD 512 Go</li>
            <li>Magma châssis Thunderbolt ExpressBox 3T</li>
          </ul>
        </div>
        <div className="column is-one-third">
        <ul>
          <li className="mat has-text-weight-bold is-size-4">Monitoring</li>
            <li>Focal SM9</li>
            <li>Yamaha HS8</li>
            <li>Casque Beyerdynamic DT770 pro(x3)</li>
            <li>ART Headamp 6 Pro</li>
            <li>Mackie HM-4 4-way headphone amp</li>
        </ul>
        <ul>
          <li className="mat has-text-weight-bold is-size-4">Backline</li>
          <li>Clavier maître StudioLogic SL990 pro (88 touches, toucher marteaux)</li>
          <li>Clavier/contrôleur MIDI AKAI MPK mini (25 touches, 8 pads, 8 encodeurs rotatifs)</li>
          <li>Basse électrique Ibanez ARTCORE series AGB200 (4 cordes)</li>
          <li>Ukulele soprano LANIKAI LU-11</li>
          <li>Guitare stand x5</li>
          <li>Accordeur Korg DTR-1000</li>
          <li>Mélodica HOHNER Student 32</li>
          <li>Harmonica HOHNER - Chromatica 270</li>
          <li>Shaker Meinl SH4KB</li>
          <li>Shaker oeuf</li>
          <li>Wincent tone gel</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default styled(Materiel)`
  ul {
    margin-top: ${pxToRem(20)};
  }
  li {
    font-size: 1.25rem;
  }
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
  .mat {
    margin-bottom: ${pxToRem(12)};
  }
  .columns {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .carousel .slide {
    background-color: white !important;
  }
`;
