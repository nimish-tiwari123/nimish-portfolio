import { Container, Row, Col } from "react-bootstrap";
import {experience} from "../../../assets";
import "./style.css";
import Card from "./Card";
const Experience = () => {
  return (
    <section className="py-md-5 py-3">
      <Container >
        <h5 className="primary-color fw-medium mt-5 text-center">
        Roles & Contributions in the Industry
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
        Professional Experience
        </h1>

        <Container className="my-2">
          <Row>
          <Col md={6} className="d-flex align-items-center">
          <img src={experience} alt="Education"  className="w-100"/></Col>
            <Col md={6}>
              <Card
                headingText="Frontend Developer & Graphic | UI/UX Designer"
                subheading="AWNS (Advanced Web & Nextgen Solutions)"
                styleText="February 2024 - Present"
                desc="Creating innovative frontend solutions and engaging graphic designs."
              />
               <Card
                headingText="Frontend Developer"
                subheading="Singaji Software Solution Company"
                styleText="October 2023 - January 2024"
                desc="Enhancing construction management software functionality."
              />
            </Col>
          
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Experience;
