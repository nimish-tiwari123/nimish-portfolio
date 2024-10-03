import React from "react";

interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return <button className="py-2 px-4 rounded-pill bg-custom-primary text-light fw-medium border">{text}</button>;
};

export default PrimaryButton;
