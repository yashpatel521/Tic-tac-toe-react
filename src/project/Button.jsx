import React from "react";
import "./button.css";
function Button({ name }) {
  return (
    <div>
      <button className="linkButton">{name}</button>
    </div>
  );
}

export default Button;
