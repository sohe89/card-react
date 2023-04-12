import React from "react";

import { useNavigate } from "react-router-dom";

const Modal2 = () => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="card">
        <h3>Modal2</h3>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
};

export default Modal2;