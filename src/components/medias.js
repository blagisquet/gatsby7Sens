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
        <Tabs className="has-text-centered is-hidden-mobile">
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
        <div className="is-hidden-mobile">
          <Content active={active === 0}>
            <div>
            </div>
          </Content>
          <Content active={active === 1}>
            <h1>Content 2</h1>
          </Content>
          <Content className="has-text-centered" active={active === 2}>
          <iframe style={{border: 0, width: '700px', height: '300px', marginTop: '3rem'}} src="https://bandcamp.com/EmbeddedPlayer/album=4102674163/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="http://sango.bandcamp.com/album/2009-2012-tapes">2009 — 2012 Tapes by Sango</a></iframe>
          </Content>
        </div>
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
  }
  .icon {
    margin-right: 0.5rem;
  }
`;