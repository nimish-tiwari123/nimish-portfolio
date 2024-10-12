import React from "react";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

interface CommonModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  body: string;
  success: string;
}

const CommonModal: React.FC<CommonModalProps> = ({
  show,
  onHide,
  title,
  body,
  success,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      
    >
     
    

      <Modal.Body>
        <div className="position-relative">
      <button
        className="position-absolute top-0 end-0 bg-transparent border-0"
        onClick={onHide}
      >
        <RxCross2 className="text-secondary fs-4" />
      </button>
        <div className="p-4 text-center">
          <img src={success} alt="success" className="mb-3" />
          <h1 className="fs-5 mt-3 fw-bold">{title}</h1>
          <p className="text-secondary mt-2 w-75 mx-auto">{body}</p>
        </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CommonModal;
