import React, { useState } from 'react';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/loulou2.jpg';

import { colors, pxToRem } from '../theme/helpers';
import { Tabs, Tab, TabMob, Content } from '../theme/tab';

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
            <span className="icon 1"><i className="fas fa-music" aria-hidden="true" onClick={handleClick} active={active === 0} id={0}></i></span>
            <span className="is-size-4" onClick={handleClick} active={active === 0} id={0}>Artistes</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 1} id={1}>
            <span className="icon 1"><i className="fas fa-image" aria-hidden="true" active={active === 1} id={1}></i></span>
            <span className="is-size-4" active={active === 1} id={1}>Studio</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 2} id={2}>
            <span className="icon 1"><i className="fas fa-play-circle" aria-hidden="true" active={active === 2} id={2}></i></span>
            <span className="is-size-4" active={active === 2} id={2}>Productions</span>
          </Tab>
        </Tabs>
        {/* Mobile */}
        <Tabs className="is-hidden-tablet">
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 0} id={0}>
            <span className="icon"><i className="fas fa-music" aria-hidden="true" onClick={handleClick} active={active === 0} id={0}></i></span>
            <span className="is-size-6" onClick={handleClick} active={active === 0} id={0}>Artistes</span>
          </TabMob>
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 1} id={1}>
            <span className="icon"><i className="fas fa-image" aria-hidden="true" active={active === 1} id={1}></i></span>
            <span className="is-size-6" active={active === 1} id={1}>Studio</span>
          </TabMob>
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 2} id={2}>
            <span className="icon"><i className="fas fa-play-circle" aria-hidden="true" active={active === 2} id={2}></i></span>
            <span className="is-size-6" active={active === 2} id={2}>Prods</span>
          </TabMob>
        </Tabs>
        {/* <div class="select">
          <select className="is-hidden-tablet is-fullwidth-mobile">
            <option onClick={handleClick} active={active === 3} id={3}>Artistes</option>
            <option onClick={handleClick} active={active === 4} id={4}>Studio</option>
            <option onClick={handleClick} active={active === 5} id={5}>Productions</option>
          </select>
        </div> */}
        <div>
          <Content active={active === 0}>
            <div>
              0
            </div>
          </Content>
          <Content active={active === 1}>
            1
          </Content>
          <Content className="has-text-centered" active={active === 2}>
            <iframe className="is-hidden-mobile" style={{ border: 0, width: '700px', height: '300px', marginTop: '1rem' }} src="https://bandcamp.com/EmbeddedPlayer/album=4102674163/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/" seamless><a href="http://sango.bandcamp.com/album/2009-2012-tapes">2009 — 2012 Tapes by Sango</a></iframe>
            <iframe className="is-hidden-tablet has-text-centered" style={{ border: 0, width: '100%', height: '470px', marginTop: '1rem' }} src="https://bandcamp.com/EmbeddedPlayer/album=4102674163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://sango.bandcamp.com/album/2009-2012-tapes">2009 — 2012 Tapes by Sango</a></iframe>
          </Content>
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
  .tab:hover, .tab:active {
		color: ${colors.primary};
  }
  .1 {
    margin-right: 0.5rem;
  }
`;