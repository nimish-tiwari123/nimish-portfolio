import { Container, Row, Col } from "react-bootstrap";
import { SecondaryButton } from "../../../components";
import {
  design,
  graphicdesign,
  uiuxdesign,
  frontend,
  vscode,
  illustrator,
  photoshop,
  figma,
} from "../../../assets/icons";

import "./style.css";
import Card from "./Card";
const SkillsSection = () => {
  return (
    <section className="bg-gray py-5">
      <Container>
        <Row>
          <Col md={5} className="position-relative">
            <h5 className="primary-color fw-medium mt-5">Special Skills</h5>
            <h1 className="fw-bold primary-font display-3">
              My Special Skill Field Here.
            </h1>
            <div className="mt-4">
              <SecondaryButton text="Hire Me" />
            </div>
            <img
              src={design}
              alt="design"
              className="w-25 position-absolute start-0 bottom-0 p-2"
            />
          </Col>
          <Col md={7} className="d-flex gap-3 flex-column">
            <Card
              headingIcon={frontend} // Image path as string
              headingText="Frontend Development"
              points={[
                "React JS",
                "Next js",
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "Bootstrap",
              ]}
              desc="Building responsive, scalable, and interactive web applications."
              tools={[vscode]}
            />
            <div className="d-flex justify-content-end ">
              <Card
                headingIcon={graphicdesign} // Image path as string
                headingText="Graphic Design"
                points={[
                  "Logo Design",
                  "Brochure Design",
                  "Banner Creation",
                  "Social Media Posts",
                ]}
                desc="Creating professional and visually appealing designs aligned with brand identity."
                tools={[illustrator, photoshop]}
              />
            </div>
            <Card
              headingIcon={uiuxdesign}
              headingText="UI/UX Design"
              points={[
                "Wireframing",
                "User Research",
                "Prototyping",
                "Information Architecture",
                "UI design",
              ]}
              desc="Designing intuitive, user-friendly interfaces that enhance user experience."
              tools={[figma]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
