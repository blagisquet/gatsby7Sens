import React from 'react';

import styled from 'styled-components';

import './style.scss';

const Services = ({ className }) => {
  return (
    <div className={className} id="services">
      <h2 className="is-size-2 has-text-centered">Les services</h2>
      <div className="colums">
        <div className="column">
          <img></img>
          <p>Enregistrement</p>
        </div>
        <div className="column">
          <img></img>
          <p>Mixage</p>
        </div>
        <div className="column">
          <img></img>
          <p>Mastering</p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default styled(Services)`

`;