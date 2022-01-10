import './Modal.css';
import React from 'react';

export function Modal ({ handleClose, show, children }){
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div class="button"><button onClick={handleClose}>
          Close
        </button></div>
      </section>
    </div>
  );
}