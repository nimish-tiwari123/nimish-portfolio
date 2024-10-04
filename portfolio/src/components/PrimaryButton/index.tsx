import React from "react";
import "./style.css";

interface PrimaryButtonProps {
  text: string;
  icon?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  icon = false,
}) => {
  return (
    <button className="py-2 px-4 rounded-pill bg-custom-primary fw-medium primary-btn">
      {text}
      {icon && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ms-2"
        >
          <path
            d="M5.8252 7.30005L7.4252 8.90005L9.0252 7.30005"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.4248 2.5V8.85625"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 7.61255C12.5 10.375 10.625 12.6125 7.5 12.6125C4.375 12.6125 2.5 10.375 2.5 7.61255"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default PrimaryButton;
