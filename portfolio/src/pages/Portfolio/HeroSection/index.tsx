import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const HeroSection = () => {
  return (
    <section className="bg-gray profile-hero">
      <Container className="d-flex justify-content-center align-items-center flex-column h-100">
        <h1 className="fw-bold display-3 primary-font">
          My <span className="primary-color primary-font">Portfolio</span>
        </h1>
        <div>
          <Link to="/" className="text-decoration-none text-dark-custom">Home</Link> |
          <span className="primary-color fw-medium"> Portfolio</span>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
