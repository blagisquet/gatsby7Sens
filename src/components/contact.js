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
                <a className="button btn is-danger is-outlined is-fullwidth" href="tel:+33658400008"><span className="icon is-medium">
                  <i className="icons fas fa-phone-alt"></i>
                </span>06 58 40 00 08</a>
              </div>
            </div>
          </div>
          <div className="column is-offset-1 is-5">
            <div className="columns is-vcentered">
              <div className="column is-4-widescreen is-3-destkop is-one-third is-hidden-touch">
                <h4 className="title is-4">Email</h4>
              </div>
              <div className="column has-text-right">
                <button className="button btn is-danger is-outlined is-fullwidth" href="mailto:b.lagisquet@gmail.com">
                  <span className="icon is-medium ">
                    <i className="icons fas fa-envelope"></i>
                  </span>b.lagisquet@gmail.com</button>
              </div>
            </div>
          </div>
        </div>
        <form method="post" action="https://formspree.io/xjvenvnj">
          <div className="columns">
            <div className="column is-half">
              <div className="field">
                <label className="label" for="name">Prénom / Nom</label>
                <div className="control has-icons-left">
                  <input className="input" type="text" name="name" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label" for="email">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" name="_replyto" />
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
                  <textarea className="textarea" name="message"></textarea>
                </div>
              </div>
              <div className="field is-pulled-right">
                <div className="control">
                  <button className="button is-link is-success envoyer">Envoyer</button>
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
    margin-bottom: ${pxToRem(24)}
  }
  .contact {
    /* width: 80%;*/
    /* margin-left: ${pxToRem(12)};
    margin-right: ${pxToRem(12)}; */
    margin-bottom: ${pxToRem(100)}; 
  }
  a {
    color: black;
  }
  .icons {
    margin-right: 2rem;
  }
  .envoyer {
    width: 20rem;
  }
  /* .btn {
    margin-bottom: ${pxToRem(24)};
    width: 5rem !important;
  } */
`;