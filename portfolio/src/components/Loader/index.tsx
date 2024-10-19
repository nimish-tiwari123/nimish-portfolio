import React, { useEffect } from "react";
import "./style.css";

const Loader: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <span className="loader-custom position-absolute"></span>
      </div>
    </div>
  );
};

export default Loader;
