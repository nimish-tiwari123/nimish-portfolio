import { Container, Row, Col } from "react-bootstrap";
import {education} from "../../../assets";
import "./style.css";
import Card from "./Card";
const Education = () => {
  return (
    <section className="py-5">
      <Container >
        <h5 className="primary-color fw-medium mt-5 text-center">
          My Academic Milestones
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
          Education Journey
        </h1>

        <Container className="my-5 ">
          <Row>
            <Col md={6}>
              <Card
                headingText="Bachelor of Computer Applications (BCA)"
                subheading="Sant Singaji Institute of Science & Management, Sandalpur"
                styleText="Graduated: May 2022 - Present"
                desc="Pursuing BCA at Vikram University, Ujjain, honing skills in programming and databases."
              />
               <Card
                headingText="12th (Higher Secondary Certificate)"
                subheading="Government Higher Secondary School, Khategaon"
                styleText="Completed: May 2021 - May 2022"
                desc="Achieved 83% in PCM (Physics, Chemistry, Mathematics) stream."
              />
            </Col>
            <Col md={6} className="d-flex align-items-center mt-5 mt-md-0">
            <img src={education} alt="Education"  className="w-100"/></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Education;
