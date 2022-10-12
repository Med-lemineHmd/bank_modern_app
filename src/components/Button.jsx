import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-comfortaa font-medium rounded-[10px] text-[17px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
