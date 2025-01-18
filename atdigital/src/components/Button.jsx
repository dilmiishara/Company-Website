import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="bg-[#F28D35] text-white py-[12px] rounded-[4px] hover:opacity-90"
      style={{
        padding: '12px 16px', // Add consistent padding
        width: 'fit-content', // Ensure the width adjusts to the content
        display: 'inline-block', // Prevent any block-level behavior
      }}
    >
      {text}
    </button>
  );
};

export default Button;
