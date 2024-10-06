import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../../components";
import {
  healthpost,
  awnsweb,
  awnsmanagement,
  fitnessapp,
} from "../../../assets/home/projects";
import "./style.css";

const Projects = () => {
  return (
    <section className="py-5">
      <Container>
        <h5 className="primary-color fw-medium mt-5 text-center">
          My Portfolio
        </h5>
        <h1 className="fw-bold primary-font text-center">
          My Complete Projects
        </h1>
        <Row className="py-5 mt-5">
          {/* Health Post Project */}
          <Col md={4}>
            <div className="project-wrapper rounded-4">
              <img
                src={healthpost}
                alt="Post Design"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4">Health Post Design</h3>
                  <p className="text-light fw-medium">Graphic Design</p>
                </div>
              </div>
            </div>
          </Col>

          {/* AWNS Web Project */}
          <Col md={4}>
            <div className="project-wrapper rounded-4">
              <img
                src={awnsweb}
                alt="AWNS Website Development"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4">AWNS Website</h3>
                  <p className="text-light fw-medium">Developed the frontend using Next JS</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Fitness App Project */}
          <Col md={4}>
            <div className="project-wrapper rounded-4">
              <img
                src={fitnessapp}
                alt="Fitness App"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3  className="text-light fw-bold fs-4">Fitness App</h3>
                  <p  className="text-light fw-medium">UI/UX Design</p>
                </div>
              </div>
            </div>
          </Col>

          {/* AWNS Management Project */}
          <Col md={12}>
            <div className="project-wrapper mt-4 rounded-4 bg-success">
              <img
                src={awnsmanagement}
                alt="AWNS Management Design"
                className="w-100 border rounded-4 project-image "
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4">AWNS Management</h3>
                  <p className="text-light fw-medium">UI/UX Design</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="text-center my-4">
        <Link to="/portfolio">
                <SecondaryButton text="Let’s See More"/>
              </Link>
         
        </div>
      </Container>
    </section>
  );
};

export default Projects;
