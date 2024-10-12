import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const HeroSection = () => {
  return (
    <section className="bg-gray profile-hero">
      <Container className="d-flex justify-content-center align-items-center flex-column h-100">
        <h1 className="fw-bold display-3 primary-font">
          Edit <span className="primary-color primary-font">Project</span>
        </h1>
        <div>
          <Link to="/" className="text-decoration-none text-dark-custom">Home</Link> |
          <Link to="/portfolio" className="text-decoration-none text-dark-custom">Portfolio</Link> |

          <span className="primary-color fw-medium"> Edit Project</span>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
