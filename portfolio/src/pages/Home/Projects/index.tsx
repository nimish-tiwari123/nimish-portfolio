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
        <h1 className="fw-bold primary-font text-center display-4">
          My Complete Projects
        </h1>
        <Row className="py-5 mt-md-5 mt-3">
          {/* Health Post Project */}
          <Col md={4}>
            <div className="project-wrapper rounded-4 " data-aos="zoom-in">
              <img
                src={healthpost}
                alt="Post Design"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4 m-0">
                    Health Post Design
                  </h3>
                  <p className="text-light fw-medium m-0 mt-1">
                    Graphic Design
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* AWNS Web Project */}
          <Col md={4}>
            <div
              className="project-wrapper rounded-4 mt-md-0 mt-4"
              data-aos="zoom-in"
            >
              <img
                src={awnsweb}
                alt="AWNS Website Development"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4 m-0">AWNS Website</h3>
                  <p className="text-light fw-medium m-0 pt-1">
                    Developed the frontend using Next JS
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Fitness App Project */}
          <Col md={4}>
            <div
              className="project-wrapper rounded-4 mt-md-0 mt-4"
              data-aos="zoom-in"
            >
              <img
                src={fitnessapp}
                alt="Fitness App"
                className="w-100 border rounded-4 project-image"
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4 m-0">Fitness App</h3>
                  <p className="text-light fw-medium m-0 pt-1">UI/UX Design</p>
                </div>
              </div>
            </div>
          </Col>

          {/* AWNS Management Project */}
          <Col md={12} className="d-none d-md-block">
            <div className="project-wrapper mt-4 rounded-4" data-aos="zoom-in">
              <img
                src={awnsmanagement}
                alt="AWNS Management Design"
                className="w-100 border rounded-4 project-image "
              />
              <div className="project-overlay p-3 rounded-4">
                <div className="project-text">
                  <h3 className="text-light fw-bold fs-4 m-0">
                    AWNS Management
                  </h3>
                  <p className="text-light fw-medium m-0 pt-1">UI/UX Design</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="text-center my-4">
          <Link to="/portfolio">
            <SecondaryButton text="Let’s See More" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
