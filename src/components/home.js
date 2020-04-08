import React from 'react';

import Hero from '../theme/hero';

import './style.scss';

const home = ({ stickyRef }) => {
  return (
  <Hero>
    <section ref={stickyRef}>
      <h1 className="is-invisible">Studio Septième Sens</h1>
    </section>
  </Hero>
  );
}

export default home;