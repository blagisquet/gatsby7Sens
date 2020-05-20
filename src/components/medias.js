import React, { useState } from 'react';
import Artistes from './artistes';
import Photos from './photos';

import './style.scss';

import styled from 'styled-components';

import loulou from '../images/test.jpg';

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
        <span id="medias"></span>
      </section>
      <section className="medias">
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Médias</h2>
        {/* Desktop */}
        <Tabs className="has-text-centered is-hidden-mobile">
          <Tab className="tab" onClick={handleClick} active={active === 0} id={0}>
            <span className="icon 1"><i className="fas fa-music" aria-hidden="true" onClick={handleClick} active={active ? 0 : ''} id={0}></i></span>
            <span className="is-size-4" active={active ? 0 : ''} id={0}>Artistes</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 1} id={1}>
            <span className="icon 1"><i className="fas fa-image" aria-hidden="true" active={active ? 1 : ''} id={1}></i></span>
            <span className="is-size-4" active={active ? 1 : ''} id={1}>Studio</span>
          </Tab>
          <Tab className="tab" onClick={handleClick} active={active === 2} id={2}>
            <span className="icon 1"><i className="fas fa-play-circle" aria-hidden="true" active={active ? 2 : ''} id={2}></i></span>
            <span className="is-size-4" active={active ? 2 : ''} id={2}>Beats</span>
          </Tab>
        </Tabs>
        {/* Mobile */}
        <Tabs className="is-hidden-tablet">
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 0} id={0}>
            <span className="icon"><i className="fas fa-music" aria-hidden="true" onClick={handleClick} active={active ? 0 : ''} id={0}></i></span>
            <span className="is-size-6" active={active ? 0 : ''} id={0}>Artistes</span>
          </TabMob>
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 1} id={1}>
            <span className="icon"><i className="fas fa-image" aria-hidden="true" active={active ? 1 : ''} id={1}></i></span>
            <span className="is-size-6" active={active ? 1 : ''} id={1}>Studio</span>
          </TabMob>
          <TabMob className="tab tabsMob" onClick={handleClick} active={active === 2} id={2}>
            <span className="icon"><i className="fas fa-play-circle" aria-hidden="true" active={active ? 2 : ''} id={2}></i></span>
            <span className="is-size-6" active={active ? 2 : ''} id={2}>Beats</span>
          </TabMob>
        </Tabs>
        <div>
          {/*Artistes*/}
          <Content active={active === 0}>
            <Artistes />
          </Content>
          {/*Studio*/}
          <Content active={active === 1}>
            <Photos />
          </Content>
          {/*Prods*/}
          <Content className="has-text-centered" active={active === 2}>
            <div className="bc">
              <iframe className="is-hidden-mobile" title="Beats by Louis" style={{ border: 0, width: '700px', height: '820px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1171375659/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/" seamless><a href="http://septiemesens.bandcamp.com/album/beats-hip-hop-rap">Beats / Hip-Hop / Rap / by Septième Sens</a></iframe>
              <iframe className="is-hidden-tablet has-text-centered" title="Beats by Louis" style={{ border: 0, width: '100%', height: '470px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1171375659/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/" seamless><a href="http://septiemesens.bandcamp.com/album/beats-hip-hop-rap">Beats / Hip-Hop / Rap / by Septième Sens</a></iframe>
            </div>
          </Content>
        </div>
        <span id="avis"></span>
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
    background: url(${loulou}) top/cover no-repeat;
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
  .medias {
    margin: 1rem 1rem;
  }
  .bc {
    margin-top: ${pxToRem(48)};
  }
`;