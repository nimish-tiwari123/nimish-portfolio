import { Container, Row, Col } from "react-bootstrap";
import { PrimaryButton } from "../../../components";
import { design } from "../../../assets/icons";
import "./style.css";
const AboutMe = () => {
  
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="aboutme-order1" >
          <div data-aos="zoom-in-right" className="py-md-5 pe-md-5 p-0">
            <img src="https://res.cloudinary.com/dfeoj4efs/image/upload/v1732252206/ersnkquyucbneag9tsw1.svg"  alt="Hero Image" className="w-100 p-5" />
          {/* <img src={aboutme} alt="Hero Image" className="w-100 p-5"  /> */}

          </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center flex-column position-relative aboutme-order"
          >
            <h5 className="primary-color fw-medium mt-5" data-aos="fade-left">Who I Am</h5>
            <h1 className="fw-bold primary-font display-4">About Me</h1>

            <p className="desc-hero" data-aos="fade-left">
              I’m a creative developer and designer with a passion for turning
              ideas into functional, beautiful digital experiences. With
              expertise in frontend technologies like React, Angular, and Next
              JS, along with graphic design skills using Adobe Illustrator and
              Photoshop, I create seamless and visually appealing user
              interfaces.
            </p>
            <div className="d-none d-lg-flex align-items-center gap-3 mt-4" data-aos="fade-up">
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
