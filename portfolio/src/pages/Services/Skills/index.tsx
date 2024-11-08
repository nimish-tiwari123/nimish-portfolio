import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineDesignServices } from "react-icons/md";
import { design, graphicdesign } from "../../../assets/icons";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { IoGitBranch } from "react-icons/io5";
import {Brochure, Design, Post, Responsive, Web} from "../../../assets/services";
import "./style.css";
import Card from "./Card";
const Skills = () => {
  return (
    <section className="py-5">
      <Container className="px-md-5 px-3 position-relative">
        <h5 className="primary-color fw-medium mt-5 text-center">
        Explore My Key Services
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
        What I Can Do For You
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
                      <FaReact
                        className="w-100 primary-color"
                        size={100}
                      />
                    }
                    headingText="React Development"
                    desc="Build dynamic, single-page web applications."
                  />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                      <TbBrandNextjs 
                        className="w-100 primary-color"
                        size={100}
                      />
                    }
                    headingText="Next.js Development"
                    desc="Deliver fast and SEO-optimized web solutions for improved visibility."
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
                   headingIcon={
                    <IoGitBranch 
                      className="w-100 primary-color"
                      size={100}
                    />
                  }
                    headingText="Version Control "
                    desc="Efficient project management with Git and Github."
                  />
                  
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                    Responsive
                    } // Image path as string
                    headingText="Responsive Design"
                    desc="Ensure websites look great on any device."
                    graphic={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={9}>
              <Row>
                <Col md={6}>
                  <Card
                    headingIcon={
                    Web
                    }
                    headingText="UI/UX Wireframing"
                    desc="Create wireframes for user-centered designs."
                    graphic={true}
                  />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                     Design
                    }
                    headingText="Figma Prototyping"
                    desc="High-fidelity UI/UX prototypes with Figma."
                    graphic={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={3}></Col>
            <Col md={9}>
              <Row>
                <Col md={6}>
                  

                    <Card
                   headingIcon={
                    Brochure
                  }
                    headingText="Brochure Design"
                    desc="Design visually compelling brochures that captivate your audience."
                    graphic={true}
                  />
                  
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <Card
                    headingIcon={
                     Post
                    } // Image path as string
                    headingText="Social Media Post Design"
                    desc="Create engaging and visually appealing social media content."
                    graphic={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={9}>
              <Row>
                <Col md={6}>
                  <Card
                    headingIcon={
                      <MdOutlineDesignServices
                        className="w-100 primary-color"
                        size={100}
                      />
                    }
                    headingText="UI/UX Design"
                    desc="Craft intuitive, user-friendly interfaces that enhance user experience."
                  />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                 <Card
                    headingIcon={graphicdesign} // Image path as string
                    headingText="Graphic Design"
                    desc="Design illustrations with Adobe Illustrator."
                    graphic={true}
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
