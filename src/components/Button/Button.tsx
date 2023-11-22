import React from "react";
import "./Button.scss";

interface ButtonProps {
   text: string;
   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
   return (
      <button
         className="button"
         onClick={onClick}
      >
         {text}
      </button>
   );
};
