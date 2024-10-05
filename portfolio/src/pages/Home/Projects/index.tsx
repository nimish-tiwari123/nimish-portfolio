import { Container, Row, Col } from "react-bootstrap";
import { SecondaryButton } from "../../../components";


import "./style.css";
const Projects = () => {
  return (
    <section className="py-5">
      <Container>
      <h5 className="primary-color fw-medium mt-5 text-center">My Portfolio</h5>
            <h1 className="fw-bold primary-font text-center">
            My Complete Projects
            </h1>
        <Row>

           

            <SecondaryButton text="Let’s See More" />
           
         
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
