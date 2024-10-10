import { Container, Row, Col } from "react-bootstrap";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdGitMerge } from "react-icons/io";
import { design, graphicdesign } from "../../../assets/icons";

import "./style.css";
import Card from "./Card";
const Skills = () => {
  return (
    <section className="py-5">
      <Container className="px-md-5 px-3 position-relative">
        <h5 className="primary-color fw-medium mt-5 text-center">
          Key Skills and Services I Offer
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
          My Expertise
        </h1>
        <img src={design} alt="design" className="position-absolute top-25 end-0 d-none d-md-block"/>
        <img src={design} alt="design" className="position-absolute bottom-0 start-0 d-none d-md-block"/>

        <Container className="my-5 pt-5 px-md-5 p-0">
          <Row>
            <Col md={9}>
              <Row>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                      <IoCodeSlashSharp
                        className="w-100 primary-color"
                        size={100}
                      />
                    }
                    headingText="Frontend Development"
                    desc="Building responsive, high-performance web applications."
                  />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                      <MdOutlineDesignServices
                        className="w-100 primary-color"
                        size={100}
                      />
                    }
                    headingText="UI/UX Design"
                    desc="Creating intuitive, user-centered digital experiences."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}></Col>
            <Col md={9}>
              <Row>
                <Col md={6} className="mt-0 mt-md-0">
                  <Card
                    headingIcon={graphicdesign} // Image path as string
                    headingText="Graphic Design"
                    desc="Designing impactful visuals for digital and print media."
                    graphic={true}
                  />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                      <IoMdGitMerge
                        className="w-100 primary-color"
                        size={100}
                      />
                    } // Image path as string
                    headingText="Version Control"
                    desc="Managing projects with Git and GitHub efficiently."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Skills;
