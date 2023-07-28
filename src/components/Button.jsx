import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button className="bg-grey-500 hover:bg-grey-600 active:bg-grey-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
