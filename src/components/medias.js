import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { colors, pxToRem } from '../theme/helpers';
import Twisted from '../theme/twisted';

const Medias = ({ className }) => {
  function changeTab(value) {
    var tabs = document.getElementsByClassName("tabs");

    var i;
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    document.getElementById("tab_" + value).style.display = "block";
  }

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
                <span className="icon"><i className="fas fa-music" aria-hidden="true"></i></span>
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
        {/* <div className="dropdown is-hidden-tablet is-fullwidth">
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
        </div> */}
        <select id="sel" className="dropdown is-hidden-tablet is-fullwidth" onChange="changeTab(this.value)">
          <option value="1">Artistes</option>
          <option value="2">Studio</option>
          <option value="3">Productions</option>
        </select>
        <div class="tabs" id="tab_1" style={{background:'#ddd',width:'100%',height:'500px',display:'none'}}>First Tab</div>
        <div class="tabs" id="tab_2" style={{background:'#ddd',width:'100%',height:'500px',display:'none'}}>Second Tab</div>
        <div class="tabs" id="tab_3" style={{background:'#ddd',width:'100%',height:'500px',display:'none'}}>Third Tab</div>
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