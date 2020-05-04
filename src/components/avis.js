import React from 'react';

import { pxToRem } from '../theme/helpers';

import styled from 'styled-components';

const Avis = () => {
  return (
    <div>
      <h2 id="avis" className="title has-text-centered is-size-2">Avis</h2>
    </div>
  );
}

export default styled(Avis)`
  h2 {
   margin-top: ${pxToRem(48)};
   margin-bottom: ${pxToRem(24)}
}
`;