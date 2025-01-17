import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="bg-[#F28D35] text-white px-[20px] py-[12px] rounded-[4px] hover:opacity-90"
    >
      {text}
    </button>
  );
};

export default Button;
