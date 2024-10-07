import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../../components";
import { aboutme } from "../../../assets/home";
import { design } from "../../../assets/icons";
import "./style.css";
const AboutMe = () => {
  
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="aboutme-order1" >
          <div data-aos="zoom-in-right" className="py-md-5 pe-md-5 p-0">
          <img src={aboutme} alt="Hero Image" className="w-100 p-5"  />

          </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center flex-column position-relative aboutme-order"
          >
            <h5 className="primary-color fw-medium mt-5" data-aos="fade-left">Who I Am</h5>
            <h1 className="fw-bold primary-font display-4">About Me</h1>
            <p className="desc-hero text-dark-custom fw-bold m-0" data-aos="fade-left">
            Hello, I’m Nimish Tiwari
            </p>
            <p className="desc-hero" data-aos="fade-left">
            I am a passionate frontend developer, graphic designer, and UI/UX enthusiast with a BCA degree from Sant Singaji Institute of Science & Management, Sandalpur. My expertise spans across modern web technologies, graphic design tools, and user-centered design, giving me a unique edge in delivering visually appealing and highly functional digital experiences.
            </p>
            <p className="desc-hero" data-aos="fade-left">
            I am a versatile professional, currently working as a <span className="fw-bold">Frontend Developer, UI/UX Designer,</span> and <span className="fw-bold">Graphic Designer</span> at <span className="fw-bold">AWNS</span> since February 2024. My journey in tech and design began during my academic years, where I developed a strong blend of creative and technical skills. </p>
            <div className="d-none d-lg-flex align-items-center gap-3 mt-4" data-aos="fade-up">
            <Link to="/connect">
                <SecondaryButton text="Hire Me"/>
              </Link>
              <Link
                href="/Nimish_Tiwari.pdf" 
                download="Nimish_Tiwari_CV.pdf" 
              >
                <PrimaryButton text="Download CV" icon={true} />
              </Link>
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
