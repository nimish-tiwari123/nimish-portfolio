import { Container, Row, Col } from "react-bootstrap";
import { ChooseMeImg } from "../../../assets";
import Card from "./Card";
import "./style.css";

const ChooseMe = () => {
  return (
    <section className="py-5">
      <Container className="px-3 position-relative">
        <h5 className="primary-color fw-medium mt-5 text-center">
          Skills That Set Me Apart
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
          Why Choose Me?
        </h1>

        <Container className="my-5 pt-5 px-md-5 p-0">
          <Row>
            <Col md={3}>
              <Card
                headingText="Creativity"
                desc="Unique, custom solutions tailored to your needs."
              />
              <Card
                headingText="Efficiency"
                desc="Quick turnarounds without compromising quality."
              />
            </Col>
            <Col md={6} className="text-center">
              <img src={ChooseMeImg} alt="Graphic" className="choose-me-img p-5" />
            </Col>
            <Col md={3}>
              <Card
                headingText="Attention to Detail"
                desc="Focus on consistently delivering pixel-perfect designs."
              />
              <Card
                headingText="Communication"
                desc="Open and transparent throughout the process."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default ChooseMe;
