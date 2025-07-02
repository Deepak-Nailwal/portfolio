import React, { useState } from "react";
import img1 from '../../assets/img/owl.jpg';

const Consult = () => {
  const [message, setMessage] = useState(''); 

  const handleClick = () => {
    setMessage('How can I help you?');
  };

  return (
    <>
      <div className="fixed-right">
        <img
          onClick={handleClick}
          src={img1}
          className="img-fluid rounded-circle resize"
          alt="owl"
          style={{ cursor: "pointer" }}
        />
        <p className="floating-text text-dark">Consult with Owl</p>
        {message && <p className="response-text text-dark">{message}</p>}
      </div>
    </>
  );
};

export default Consult;
