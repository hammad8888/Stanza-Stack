// src/components/ui/button.jsx
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
