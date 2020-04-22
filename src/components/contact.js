import React from 'react';

import './style.scss';

import { pxToRem } from '../theme/helpers';

import styled from 'styled-components';

const Contact = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="is-size-2 has-text-centered has-text-weight-bold">Contact</h2>
      <button className="button btn is-fullwidth"><a href="tel:+33658400008">06 58 40 00 08</a></button>
      <button className="button btn is-fullwidth"><a href="mailto:b.lagisquet@gmail.com">b.lagisquet@gmail.com</a></button>
      <form method="post" action="https://formspree.io/xjvenvnj">
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
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message"></textarea>
          </div>
        </div>
        <div className="field is-pulled-right">
          <div className="control">
            <button className="button is-link is-success">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default styled(Contact)`
  h2 {
    margin-top: ${pxToRem(48)};
    margin-bottom: ${pxToRem(24)}
  }
  form {
    /* width: 80%;*/
    margin-left: ${pxToRem(12)};
    margin-right: ${pxToRem(12)};
    margin-bottom: ${pxToRem(100)};
  }
  a {
    text-decoration: none;
  }
  .btn {
    margin-bottom: ${pxToRem(12)};
    margin-left: ${pxToRem(12)};
    margin-right: ${pxToRem(12)};
  }
`;