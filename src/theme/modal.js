import React from 'react';

import '../components/style.scss';

const Modal = ({ children, closeModal, showModal, title }) => {
  if(!showModal) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
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