import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectView from "./Modals/ProjectView";
import DeleteProject from "./Modals/DeleteProject"; // Import the modal
import { PrimaryButton, Loader } from "../../../components";
import { nodata } from "../../../assets";
import { useViewProjectQuery } from "../../../apis/service";
import { MdEdit, MdDelete } from "react-icons/md";
import "./style.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const userId = localStorage.getItem("userId");
  const { data, isLoading, isFetching } = useViewProjectQuery(activeTab);
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleViewModalOpen = (project: any) => {
    setSelectedProject(project);
    setShowViewModal(true);
  };

  const handleDeleteModalOpen = (project: any) => {
    setSelectedProject(project);
    setShowDeleteModal(true);
  };

  const handleModalClose = () => {
    setShowViewModal(false);
    setShowDeleteModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section>
        {(isFetching || isLoading) && <Loader />}
        <Container>
          <h5 className="primary-color fw-medium mt-5 text-center">
            My Portfolio
          </h5>
          <h1 className="fw-bold primary-font text-center display-4">
            My Complete Projects
          </h1>

          <Container className="tabs-container d-flex flex-wrap justify-content-center gap-3 mt-5 py-4">
            <button
              className={`tab-button ${
                activeTab === "all" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("all")}
            >
              All
            </button>
            <button
              className={`tab-button ${
                activeTab === "Frontend Development"
                  ? "active-tab"
                  : "deactive-tab"
              }`}
              onClick={() => handleTabClick("Frontend Development")}
            >
              Frontend
            </button>
            <button
              className={`tab-button ${
                activeTab === "UI/UX Design" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("UI/UX Design")}
            >
              UI/UX
            </button>
            <button
              className={`tab-button ${
                activeTab === "Graphic Design" ? "active-tab" : "deactive-tab"
              }`}
              onClick={() => handleTabClick("Graphic Design")}
            >
              Graphic
            </button>
          </Container>

          <Container>
            <h1 className="fw-bold primary-font my-4">
              {data?.projects?.length} Projects
            </h1>
          </Container>
          <Container className="tab-content pb-5">
            <Row className="mt-3">
              {data?.projects?.length <= 0 && (
                <img
                  src={nodata}
                  alt="No Project"
                  className="no-project-img d-block m-auto"
                />
              )}
              {data?.projects?.map((item: any) => (
                <Col md={4}>
                  <div
                    className="project-wrapper rounded-4 mt-md-4 mt-3 position-relative "
                    data-aos="zoom-in"
                  >
                    {userId && (
                      <div className="position-absolute end-0 top-0 p-3 d-flex gap-2 z-1">
                        <button
                          className="action-btn border-0 rounded-circle p-2 bg-white d-flex justify-content-center align-items-center"
                          onClick={() => navigate(`/editproject/${item._id}`)}
                        >
                          <MdEdit className="text-success" size={16} />
                        </button>
                        <button
                          className="action-btn border-0 rounded-circle p-2 bg-white d-flex justify-content-center align-items-center"
                          onClick={() => handleDeleteModalOpen(item)}
                        >
                          <MdDelete className="text-danger" size={16} />
                        </button>
                      </div>
                    )}
                    <img
                      src={item.image}
                      alt="Post Design"
                      className="w-100 border rounded-4 project-image-port"
                    />
                    <div className="project-overlay pb-4 px-3 rounded-4 d-flex justify-content-between flex-row align-items-end">
                      <div className="project-text">
                        <h3 className="text-light fw-bold fs-4 m-0">
                          {item.title.split(" ").slice(0, 3).join(" ")}
                        </h3>
                        <p className="text-light fw-medium pt-1 m-0">
                          {item.category.map((category: string) => (
                            <>{category}</>
                          ))}
                        </p>
                      </div>
                      <button
                        className="project-view-btn text-light bg-transparent rounded-pill px-3 py-1"
                        onClick={() => handleViewModalOpen(item)}
                      >
                        <IoIosArrowRoundForward size={30} />
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {userId && (
              <div className="d-flex justify-content-center mt-4">
                <Link to="/addproject">
                  <PrimaryButton text="+ Add Project" />
                </Link>
              </div>
            )}
          </Container>

          {/* Delete Modal */}
          {selectedProject && (
            <DeleteProject
              show={showDeleteModal}
              onHide={handleModalClose}
              project={selectedProject}
            />
          )}

          {/* Project View Modal */}
          {selectedProject && (
            <ProjectView
              show={showViewModal}
              onHide={handleModalClose}
              project={selectedProject}
            />
          )}
        </Container>
      </section>
    </>
  );
};

export default Projects;
