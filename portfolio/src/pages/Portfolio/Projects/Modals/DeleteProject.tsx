import { useState } from "react";
import { Modal, Container, Row } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useDeleteProjectMutation } from "../../../../apis/service";
import { PiWarningCircle } from "react-icons/pi";
import { Loader, CommonModal } from "../../../../components";
import { success } from "../../../../assets/icons";

interface ProjectModalProps {
  show: boolean;
  onHide: () => void;
  project: {
    _id: string;
    title: string;
  };
}

const DeleteProject: React.FC<ProjectModalProps> = ({
  show,
  onHide,
  project,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();

  const handleDelete = async () => {
    try {
      await deleteProject(project._id).unwrap();
      setModalShow(true); // Show success modal first
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleCloseSuccessModal = () => {
    setModalShow(false); // Close success modal
    onHide(); // Close the DeleteProject modal only after success modal closes
  };

  return (
    <>
      {isDeleting && <Loader />}
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className="p-0">
          <Container fluid className="position-relative p-0 m-0">
            <RxCross1
              size={22}
              className="position-absolute top-0 end-0 m-3 text-secondary cursor-pointer"
              onClick={onHide}
            />
            <Row className="text-center">
              <PiWarningCircle size={70} className="text-danger mt-5" />
              <h3 className="mt-3 fs-5">
                Are you sure you want to delete
                <br /> <strong className="text-danger">{project.title}</strong>?
              </h3>
              <div className="mt-4 mb-4 d-flex justify-content-center gap-3">
                {/* Close Button */}
                <button
                  className="btn rounded-pill px-4 py-2 border bg-secondary-subtle"
                  onClick={onHide}
                  disabled={isDeleting}
                >
                  Cancel
                </button>

                {/* Delete Button */}
                <button
                  className="btn rounded-pill px-4 py-2 border bg-danger text-light"
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  Delete
                </button>
              </div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <CommonModal
        show={modalShow}
        onHide={handleCloseSuccessModal} 
        title="Project Deleted Successfully!"
        body="Your project has been successfully updated. All changes have been saved and reflected in your portfolio."
        success={success}
      />
    </>
  );
};

export default DeleteProject;
