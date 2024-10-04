import { Container, Row, Col } from "react-bootstrap";
import { PrimaryButton } from "../../../components";
import { aboutme } from "../../../assets/home";
import { design } from "../../../assets/icons";
import "./style.css";
const AboutMe = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="aboutme-order1">
            <img src={aboutme} alt="Hero Image" className="w-100 p-5" />
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center flex-column position-relative aboutme-order"
          >
            <h5 className="primary-color fw-medium mt-5">Hi, I'm</h5>
            <h1 className="fw-bold primary-font">About Me</h1>

            <p className="desc-hero">
              I’m a creative developer and designer with a passion for turning
              ideas into functional, beautiful digital experiences. With
              expertise in frontend technologies like React, Angular, and Next
              JS, along with graphic design skills using Adobe Illustrator and
              Photoshop, I create seamless and visually appealing user
              interfaces.
            </p>
            <div className="d-none d-lg-flex align-items-center gap-3 mt-4">
              <a
                href="/Nimish_Tiwari.pdf" 
                download="Nimish_Tiwari_CV.pdf" 
              >
                <PrimaryButton text="Download CV" icon={true} />
              </a>
            </div>

            <img
              src={design}
              alt="design"
              className="w-25 position-absolute end-0 top-0 p-4 mt-5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
