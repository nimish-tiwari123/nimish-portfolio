import { Container, Row, Col } from "react-bootstrap";
import { hero } from "../../../assets/home";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../../../components";
import "./style.css";
const HeroSection = () => {
  return (
    <section className="bg-gray">
      <Container>
        <Row>
          <Col md={6} className="py-md-5 py-4">
            <h4 className="primary-color fw-medium mt-md-5 mt-3" data-aos="fade-right">Hi, I'm</h4>
            <h1 className="fw-bold display-2 primary-font">Nimish Tiwari</h1>
            <h5 className="fw-medium primary-color hero-subheading" data-aos="fade-right">
              Frontend Developer | Graphic Designer | UI/UX Specialist.
            </h5>
            <p className="desc-hero" data-aos="fade-right">
              Bringing ideas to life through clean code and creative design. I
              specialize in building modern websites, crafting eye-catching
              graphics, and designing user-friendly interfaces. Whether it's
              frontend development or visual design, my goal is to create
              digital experiences that are both functional and beautiful.
            </p>
            <div className="d-none d-lg-flex align-items-center gap-3 mt-4" data-aos="fade-up">
            <Link
                href="/Nimish_Tiwari.pdf" 
                download="Nimish_Tiwari_CV.pdf" 
              >
                <PrimaryButton text="Download CV" icon={true} />
              </Link>
              <Link to="/portfolio">
                <SecondaryButton text="View Portfolio" icon={true}/>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <img src={hero} alt="Hero Image" className="w-100" data-aos="zoom-in-up"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
