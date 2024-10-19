import React from "react";
import { Modal } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircle } from "react-icons/pi";

interface CommonModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  body: string;
  onLogout: () => void; // Add this prop
}

const LogoutModal: React.FC<CommonModalProps> = ({
  show,
  onHide,
  title,
  body,
  onLogout, // Destructure the new prop
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <div className="position-relative">
          <button
            className="position-absolute top-0 end-0 bg-transparent border-0"
            onClick={onHide}
          >
            <RxCross2 className="text-secondary fs-4" />
          </button>
          <div className="p-4 text-center">
           <PiWarningCircle size={50} className="text-danger"/>
            <h1 className="fs-5 mt-3 fw-bold">{title}</h1>
            <p className="text-secondary mt-2 w-75 mx-auto">{body}</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn rounded-pill px-4 py-2 border bg-secondary-subtle" onClick={onHide}>
                Cancel
              </button>
              <button className="btn rounded-pill px-4 py-2 border bg-danger text-light" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LogoutModal;
