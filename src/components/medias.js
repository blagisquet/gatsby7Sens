import React, { useState } from 'react';
// import { Link } from 'gatsby';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { colors, pxToRem } from '../theme/helpers';
import { Tabs, Tab, Content } from '../theme/tab';

const Medias = ({ className }) => {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className={className}>
      <section className="hero image">
        {/* <div className={theme === 'dark' ? 'hero-body twisted-black' : 'hero-body twisted-white'}> */}
        <div className="hero-body twisted">
          <div className="container has-text-centered">
            {/* <p className="title is-2 has-text-centered"></p>
              <button className="button is-danger is-medium is-fullwidth-mobile"><Link to="#medias" className="has-text-light">Voir +</Link></button> */}
          </div>
        </div>
      </section>
      <section>
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Médias</h2>
        {/* Desktop */}
        <Tabs className="has-text-centered">
          <Tab className="tab" onClick={handleClick} active={active === 0} id={0}>
            <span className="icon"><i className="fas fa-music" aria-hidden="true" onClick={handleClick} active={active === 0} id={0}></i></span>
            <span className="is-size-4" onClick={handleClick} active={active === 0} id={0}>Artistes</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 1} id={1}>
            <span className="icon"><i className="fas fa-image" aria-hidden="true" active={active === 1} id={1}></i></span>
            <span className="is-size-4" active={active === 1} id={1}>Studio</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 2} id={2}>
            <span className="icon"><i className="fas fa-play-circle" aria-hidden="true"  active={active === 2} id={2}></i></span>
            <span className="is-size-4" active={active === 2} id={2}>Productions</span>
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <h1>Content 1</h1>
          </Content>
          <Content active={active === 1}>
            <h1>Content 2</h1>
          </Content>
          <Content active={active === 2}>
            <h1>Content 3</h1>
          </Content>
        </>
        {/* <div className="tabs is-centered is-hidden-mobile">
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
        </div> */}
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
        <div class="tabs" id="tab_1" style={{ background: '#ddd', width: '100%', height: '500px', display: 'none' }}>First Tab</div>
        <div class="tabs" id="tab_2" style={{ background: '#ddd', width: '100%', height: '500px', display: 'none' }}>Second Tab</div>
        <div class="tabs" id="tab_3" style={{ background: '#ddd', width: '100%', height: '500px', display: 'none' }}>Third Tab</div>
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
  .tab:hover, .tab:active {
		color: ${colors.primary};
    border-bottom: 1px solid ${colors.primary};
  }
`;