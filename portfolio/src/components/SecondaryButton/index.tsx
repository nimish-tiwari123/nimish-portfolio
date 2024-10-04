import React from "react";
import "./style.css";
interface SecondaryButtonProps {
  text: string;
  icon?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  icon = false,
}) => {
  return (
    <button className="py-2 px-4 rounded-pill green-border secondary-btn fw-medium">
      {text}
      {icon && (
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ms-2"
        >
          <path
            d="M14.8271 6.55908L21.0643 13.273L14.8271 19.987"
            stroke="#207733"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.59668 13.2729H20.8902"
            stroke="#207733"
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

export default SecondaryButton;
