import React from "react";

import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="container">
        <div className="row">
        <div>
        <h3>Modal</h3>
        </div>
        <div>
        <button onClick={() => navigate(-1)}>Close</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;