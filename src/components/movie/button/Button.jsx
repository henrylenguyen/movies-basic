import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
  full = false
}) => {
  let bgClassName = "bg-primary";
  let textColor = "text-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      textColor = "text-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
       textColor = "text-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type="type"
      className={`btn-watch mt-3 ${full?"w-full":""} justify-center ${bgClassName} ${className}`}
      onClick={onClick}
    >
      {children}
      <i className={`fas fa-play icon-play ${textColor}`}></i>
    </button>
  );
};

export default Button;
