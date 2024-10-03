import React from "react";

interface SecondaryButtonProps {
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text }) => {
  return <button className="py-2 px-4 rounded-pill green-border primary-color fw-medium bg-transparent">{text}</button>;
};

export default SecondaryButton;
