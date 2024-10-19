import { Modal, Container, Row, Col } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";

interface ProjectModalProps {
  show: boolean;
  onHide: () => void;
  project: {
    image: string;
    title: string;
    description: string;
    tools: string;
    status: string;
  };
}

const ProjectView: React.FC<ProjectModalProps> = ({
  show,
  onHide,
  project,
}) => {
  console.log(project)
  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Body className="p-0">
        <Container fluid className="position-relative p-0 m-0">
          <RxCross1
            size={22}
            className="position-absolute top-0 end-0 m-3 text-secondary cursor-pointer"
            onClick={onHide}
          />
          <Row>
            <Col md={6} className="pt-md-3 ps-md-4">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded-2 mb-3"
              />
            </Col>
            <Col md={6} className="p-4">
              <h3 className="fw-bold primary-color primary-font mt-md-4 mt-0">
                {project.title}
              </h3>
              <p className="opacity-75">{project.description}</p>
              <p>
                Tools / Technologies Used:
                <span className="fw-bold"> {project.tools}</span>
              </p>
              {project.status == "Completed" && (
                <button className="text-success bg-success-subtle fw-medium border-0 rounded-pill py-1 px-3 ">
                  {project.status}
                </button>
              )}
              {project.status == "Pending" && (
                <button className="text-warning bg-warning-subtle fw-medium border-0 rounded-pill py-1 px-3 ">
                  {project.status}
                </button>
              )}{" "}
              {project.status == "In Progress" && (
                <button className="text-primary bg-primary-subtle fw-medium border-0 rounded-pill py-1 px-3 ">
                  {project.status}
                </button>
              )}
              <button
                className="bg-transparent green-border py-2 px-4 rounded-pill primary-color position-absolute bottom-0 end-0 m-4 mt-md-0 mt-5"
                onClick={onHide}
              >
                Close
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectView;
