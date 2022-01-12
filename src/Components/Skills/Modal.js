import "./style.css";
import React from "react";
import Button from '@mui/material/Button';

export function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div class="button" >
          <Button variant="contained"onClick={handleClose}>
            Close
          </Button>
        </div>
      </section>
    </div>
  );
}
