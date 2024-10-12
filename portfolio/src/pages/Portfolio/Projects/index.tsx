import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { healthpost } from "../../../assets/home/projects";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectView from "./Modals/ProjectView"; 
import { PrimaryButton } from "../../../components";
import { nodata } from "../../../assets";
import "./style.css";


const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleModalOpen = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const projectData = {
    image: healthpost,
    title: "Health Post Design",
    description: "This is a health post design that focuses on graphic elements for healthcare campaigns.",
    tools: "Adobe Illustrator, Photoshop",
    status: "Completed"
  };

  return (
    <>
      <section>
        <Container>
          <h5 className="primary-color fw-medium mt-5 text-center">
            My Portfolio
          </h5>
          <h1 className="fw-bold primary-font text-center display-4">
            My Complete Projects
          </h1>
          <Container className="tabs-container d-flex flex-wrap justify-content-center gap-3 my-5 py-4">
            <button
              className={`tab-button ${
                activeTab === "All" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("All")}
            >
              All
            </button>
            <button
              className={`tab-button ${
                activeTab === "Frontend" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("Frontend")}
            >
              Frontend
            </button>
            <button
              className={`tab-button ${
                activeTab === "UI/UX" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("UI/UX")}
            >
              UI/UX
            </button>
            <button
              className={`tab-button ${
                activeTab === "Graphic" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("Graphic")}
            >
              Graphic
            </button>
          </Container>

          <Container className="tab-content my-5">
            {activeTab === "All" && (
              <Row className="py-5 mt-md-5 mt-3">
                {/* Health Post Project */}
                <Col md={4}>
                  <div
                    className="project-wrapper rounded-4"
                    data-aos="zoom-in"
                  >
                    <img
                      src={healthpost}
                      alt="Post Design"
                      className="w-100 border rounded-4 project-image"
                    />
                    <div className="project-overlay pb-4 px-3 rounded-4 d-flex justify-content-between flex-row align-items-end">
                      <div className="project-text">
                        <h3 className="text-light fw-bold fs-4 m-0">
                          Health Post Design
                        </h3>
                        <p className="text-light fw-medium pt-1 m-0">
                          Graphic Design
                        </p>
                      </div>
                      <button
                        className="project-view-btn text-light bg-transparent rounded-pill px-3 py-1"
                        onClick={() => handleModalOpen(projectData)}
                      >
                        <IoIosArrowRoundForward size={30} />
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
            {activeTab === "Frontend" && (
              <div>
                <img src={nodata} alt="No Project" className="no-project-img d-block m-auto"/>
              </div>
            )}
            {activeTab === "UI/UX" && (
              <div>
                 <img src={nodata} alt="No Project" className="no-project-img d-block m-auto"/>
              </div>
            )}
            {activeTab === "Graphic" && (
              <div>
                 <img src={nodata} alt="No Project" className="no-project-img d-block m-auto"/>
              </div>
            )}
          </Container>
          <div  className="d-flex justify-content-center">
          <Link to="/addproject">
          <PrimaryButton text="+ Add Project"/>

          </Link>
          </div>
        </Container>

        {/* Modal for project details */}
        {selectedProject && (
          <ProjectView
            show={showModal}
            onHide={handleModalClose}
            project={selectedProject}
          />
        )}
      </section>
    </>
  );
};

export default Projects;
