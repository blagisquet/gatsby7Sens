import React from 'react';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { pxToRem } from '../theme/helpers';

const Medias = ({ className }) => {
  return (
    <div className={className}>
      <section className="hero image">
        <div className="hero-body twisted">
          <div className="container has-text-centered">
          </div>
        </div>
      </section>
      <section>
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Médias</h2>
        <div className="tabs is-centered">
          <ul>
            <li>
              <a>
                <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                <span className="is-size-4">Artistes</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                <span className="is-size-4">Studio</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fas fa-play-circle" aria-hidden="true"></i></span>
                <span className="is-size-4">Production</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default styled(Medias)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
   .image {
    background: url(${loulou}) center/cover no-repeat;
  }
  .container {
    margin-top: ${pxToRem(250)};
  }
  .hero {
    margin-top: ${pxToRem(48)};
  }
  li:hover {
		color: #C80036;
  }
`;