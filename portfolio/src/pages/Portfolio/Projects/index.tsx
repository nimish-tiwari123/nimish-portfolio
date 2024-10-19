import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import { healthpost } from "../../../assets/home/projects";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectView from "./Modals/ProjectView";
import { PrimaryButton, Loader} from "../../../components";
import { nodata } from "../../../assets";
import { useViewProjectQuery } from "../../../apis/service";
import { MdEdit, MdDelete } from "react-icons/md";
import "./style.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem("userId");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { data, isLoading } = useViewProjectQuery(activeTab);
  const navigate = useNavigate();

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
    description:
      "This is a health post design that focuses on graphic elements for healthcare campaigns.",
    tools: "Adobe Illustrator, Photoshop",
    status: "Completed",
  };

  return (
    <>
      <section>
        {isLoading && <Loader/>}
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
                {data?.projects?.map((item: any) => (
                  <Col md={4}>
                    <div
                      className="project-wrapper rounded-4 mt-3 position-relative "
                      data-aos="zoom-in"
                    >
                     {userId &&
                     (
                      <div className="position-absolute end-0 top-0 p-3 d-flex gap-2 z-1">
                      <button className="action-btn border-0 rounded-circle p-2 bg-white d-flex justify-content-center align-items-center" onClick={()=>navigate(`/editproject/:${item._id}`)}>
                        <MdEdit className="text-success" size={16} />
                      </button>
                      <button className="action-btn border-0 rounded-circle p-2 bg-white d-flex justify-content-center align-items-center">
                        <MdDelete className="text-danger" size={16} />
                      </button>
                    </div>
                     )
                     }
                      <img
                        src={item.image}
                        alt="Post Design"
                        className="w-100 border rounded-4 project-image"
                      />
                      <div className="project-overlay pb-4 px-3 rounded-4 d-flex justify-content-between flex-row align-items-end">
                        <div className="project-text">
                          <h3 className="text-light fw-bold fs-4 m-0">
                            {item.title}
                          </h3>
                          <p className="text-light fw-medium pt-1 m-0">
                            {item.category.map((category: string) => (
                              <>{category}</>
                            ))}
                          </p>
                        </div>
                        <button
                          className="project-view-btn text-light bg-transparent rounded-pill px-3 py-1"
                          onClick={() => handleModalOpen(item)}
                        >
                          <IoIosArrowRoundForward size={30} />
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
            {activeTab === "Frontend" && (
              <div>
                <img
                  src={nodata}
                  alt="No Project"
                  className="no-project-img d-block m-auto"
                />
              </div>
            )}
            {activeTab === "UI/UX" && (
              <div>
                <img
                  src={nodata}
                  alt="No Project"
                  className="no-project-img d-block m-auto"
                />
              </div>
            )}
            {activeTab === "Graphic" && (
              <div>
                <img
                  src={nodata}
                  alt="No Project"
                  className="no-project-img d-block m-auto"
                />
              </div>
            )}
          </Container>
          {userId && (
          <div className="d-flex justify-content-center">
            <Link to="/addproject">
              <PrimaryButton text="+ Add Project" />
            </Link>
          </div>
          )}
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
