import React, { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const Button = ({ onClick, label, type, className }) => {
  const { state } = useContext(Web3Context);
  return (
    <button onClick={onClick} type={type} className={className}>
      <div className="flex items-stretch justify-center gap-x-2">
        {selectedAccount && type == "navbar" && (
          <img
            src="https://i.ibb.co/jJVjTfX/image-811.png"
            alt="image-811"
            border="0"
            className="w-8 h-5"
          ></img>
        )}
        <p>{label}</p>
        {selectedAccount && type == "navbar" && (
          <i className="fa-solid fa-bars w-5 h-5 mt-[3px]"></i>
        )}
      </div>
    </button>
  );
};

export default Button;
