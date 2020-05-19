import React from 'react';

import './style.scss';

import { pxToRem } from '../theme/helpers';

import styled from 'styled-components';

const Contact = ({ className }) => {
  return (
    <div className={className}>
      <div className="contact container is-fluid">
        <h2 className="is-size-2 has-text-centered has-text-weight-bold">Contact</h2>
        <div className="columns is-vcentered">
          <div className="column is-5">
            <div className="columns is-vcentered">
              <div className="column is-4-widescreen is-3-desktop is-hidden-touch">
                <h4 className="title is-4">Tél<span className="is-hidden-widescreen">.</span><span className="is-hidden-desktop-only">éphone</span></h4>
              </div>
              <div className="column has-text-right">
                <a className="button btn is-danger is-outlined is-fullwidth" href="tel:+33652887250"><span className="icon is-medium">
                  <i className="icons fas fa-phone-alt"></i>
                </span>06 52 88 72 50</a>
              </div>
            </div>
          </div>
          <div className="column is-offset-1 is-5">
            <div className="columns is-vcentered">
              <div className="column is-4-widescreen is-3-destkop is-one-third is-hidden-touch">
                <h4 className="title is-4">Email</h4>
              </div>
              <div className="column has-text-right">
                <button className="button btn is-danger is-outlined is-fullwidth" href="mailto:studio@sensduspectacle.com">
                  <span className="icon is-medium ">
                    <i className="icons fas fa-envelope"></i>
                  </span>studio@sensduspectacle.com</button>
              </div>
            </div>
          </div>
        </div>
        <form method="post" action="https://formspree.io/xleprzaw">
          <div className="columns">
            <div className="column is-half">
              <div className="field">
                <label className="label" htmlFor="name">Prénom / Nom</label>
                <div className="control has-icons-left">
                  <input className="input" type="text" name="name" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="email">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" name="_replyto" required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" name="message" required></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button btn is-success envoyer is-fullwidth">Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default styled(Contact)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(40)}
  }

  a {
    color: black;
  }

  .icons {
    margin-right: 2rem;
  }

  .envoyer {
    margin-top: 1rem;
  }

  @media (max-width:330px){
    .fa-envelope {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1080px){
    .fa-envelope {
      display: none;
    }
  }
`;