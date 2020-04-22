import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { colors, pxToRem } from '../theme/helpers';
import Twisted from '../theme/twisted';

const Medias = ({ className }) => {
  return (
    <div className={className}>
      <Twisted />
      <section>
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Médias</h2>
        {/* Desktop */}
        <div className="tabs is-centered is-hidden-mobile">
          <ul>
            <li>
              <Link to="/music" exact="true" activeClassName="active">
                <span className="icon"><i className="fas fa-music"></i></span>
                <span className="is-size-4">Artistes</span>
              </Link>
            </li>
            <li>
              <Link to="/photo" exact="true" activeClassName="active">
                <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                <span className="is-size-4">Studio</span>
              </Link>
            </li>
            <li>
              <Link to="/prod" exact="true" activeClassName="active">
                <span className="icon is-small"><i className="fas fa-play-circle" aria-hidden="true"></i></span>
                <span className="is-size-4">Productions</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <div className="dropdown is-hidden-tablet is-fullwidth">
          <div className="drowdown-trigger">
            <button className="button is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Médias</span>
              <span className="icon has-text-info">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link to="#artistes" className="dropdown-item">Artistes</Link>
            </div>
            <div className="dropdown-content">
              <Link to="#studio" className="dropdown-item">Studio</Link>
            </div>
            <div className="dropdown-content">
              <Link to="#prod" className="dropdown-item">Productions</Link>
            </div>
          </div>
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
  span:hover, span:active {
		color: ${colors.primary};
  }
`;