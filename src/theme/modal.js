import React from 'react';

import '../components/style.scss';

const Modal = ({ children, closeModal, showModal }) => {
  if(!showModal) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div role="button" tabIndex="0" className="modal-background" onClick={closeModal} onKeyDown={closeModal} />
      <button className="delete modal-close is-large" aria-label="close" onClick={closeModal}></button>
        <section className="modal-content">
          <div className="content">
            {children}
          </div>
        </section>
    </div>

  );
}

export default Modal;