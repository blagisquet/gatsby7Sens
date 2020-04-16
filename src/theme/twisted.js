import React from 'react';

import styled from 'styled-components';

const Twisted = ({ className, theme }) => {
  return (
    <div className={className}>
      <section className="hero image">
        <div className={theme === 'dark' ? 'hero-body twisted-black' : 'hero-body twisted-white'}>
          {/* <div className="hero-body twisted"> */}
          <div className="container has-text-centered">
            {/* <p className="title is-2 has-text-centered"></p>
              <button className="button is-danger is-medium is-fullwidth-mobile"><Link to="#medias" className="has-text-light">Voir +</Link></button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default styled(Twisted)`
  .twisted,
  .twisted-black {
    &::before {
      margin-top: -1px;
      margin-bottom: -1px;
      height: 126px;
      display: block;
      content: "";
      background-color: black;
      -webkit-mask-image: url("../images/twistLeft.svg");
      mask-image: url("../images/twistLeft.svg");
      /* // background-image: url("../images/twistLeft.svg"); */
      background-size: 100% 126px;
    }
  }
  .twisted,
  .twisted-black {
    &::after {
      margin-top: 150px;
      margin-bottom: -1px;
      height: 126px;
      display: block;
      content: "";
      background-color: black;
      -webkit-mask-image: url("../images/twistRight.svg");
      mask-image: url("../images/twistRight.svg");
      /* // background-image: url("../images/twistRight.svg"); */
      background-size: 100% 126px;
    }
  }
`;