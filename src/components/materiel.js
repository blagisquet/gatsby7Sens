import React from 'react';

import styled from 'styled-components';
import './style.scss';

import { pxToRem } from '../theme/helpers';

const Materiel = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered">Matériel</h2>
      <div className="columns has-text-centered-mobile">
        <ul className="column">
          <li className="has-text-weight-semibold">Console/Preamps</li>
          <li>DDA QII 32 in</li>
          <li>Universal audio Apollo Twin</li>
        </ul>
      </div>
    </div>
  )
}

export default styled(Materiel)`
  h2 {
    margin-top: ${pxToRem(24)};+
  }
`;
