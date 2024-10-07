import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { footerlogo } from "../../assets";
import { arrowright, call, email, location} from "../../assets/icons";
import { TiSocialLinkedin  } from "react-icons/ti";
import { PiGithubLogoFill   } from "react-icons/pi";
import { AiOutlineBehance   } from "react-icons/ai";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section text-light pt-5 pb-3">
      <Container className="pt-5" >
        <Row data-aos="zoom-in">
            
          {/* Column 1 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title text-md-start text-center">
              <img src={footerlogo} alt="logo" />
            </h5>
            <p className="text-light opacity-75 fw-light mt-4 text-md-start text-center">
              I'm a frontend developer, UI/UX designer, and graphic artist,
              passionate about building innovative solutions and crafting unique
              designs.
            </p>
           <div className="text-center text-md-start">
            <Link to="/profile">
            <button className="py-3 px-5 mt-4 rounded-pill secondary-color bg-transparent fw-medium secondary-border">
              About Me
            </button>
            </Link>
         
           </div>
          </Col>

          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-4 px-md-5 px-0">
            <h5 className="footer-title text-light fw-bold text-center text-md-start mt-4 mt-md-0">Quick Links</h5>
            <ul className="list-unstyled d-flex gap-3 flex-column mt-4">
              <Link to="/">
                <li className="text-center text-md-start">
                  <img src={arrowright} alt="arrow" /> Home
                </li>
              </Link>
              <Link to="/profile">
              <li className="text-center text-md-start"> <img src={arrowright} alt="arrow" /> Profile</li>
              </Link>
              <Link to="/services">
              <li className="text-center text-md-start">  <img src={arrowright} alt="arrow" /> Services</li>
              </Link>
              <Link to="/portfolio">
              <li className="text-center text-md-start"> <img src={arrowright} alt="arrow" /> Portfolio</li>
              </Link>
              <Link to="/connect">
              <li className="text-center text-md-start"> <img src={arrowright} alt="arrow" /> Connect</li>
              </Link>
            </ul>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title text-light fw-bold text-center text-md-start mt-4 mt-md-0">Services</h5>
            <ul className="list-unstyled d-flex gap-3 flex-column mt-4">
              <li className="text-light opacity-75 fw-light text-center text-md-start">
                  Frontend Development
              </li>
              <li className="text-light opacity-75 fw-light text-center text-md-start">
                  Graphic Design
              </li>
              <li className="text-light opacity-75 fw-light text-center text-md-start">
               
                  UI/UX Design
                
              </li>
           
            </ul>
          </Col>
          {/* Column 4 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title text-light fw-bold text-center text-md-start mt-4 mt-md-0">Get In Touch</h5>
            <ul className="list-unstyled  d-flex gap-4 flex-column mt-4">
              <li className="text-light d-flex gap-2 contact-flex">
                <img src={call} alt="call" className="" style={{width:"24px"}}/>
               +91 9926491887
              </li>
              <li className="text-light d-flex gap-2 contact-flex">
                <img src={email} alt="email" className="" style={{width:"24px"}}/>
                nimish.tiwari0704@gmail.com
              </li> <li className="text-light d-flex gap-2 contact-flex">
                <img src={location} alt="location" className="" style={{width:"24px"}}/>
                Narmada Colony Khategaon
                District - Dewas (M.P.)
              </li>
              <li className="d-flex gap-4 mt-3 social-icons contact-flex">
                <Link to="https://www.linkedin.com/in/nimish-tiwari-542146274" target="_blank">
                <span>
                <TiSocialLinkedin size={28} className="bg-light rounded-1"/>
                </span>
                </Link>
                <Link to="https://github.com/nimish-tiwari123" target="_blank">
                <span>
                <PiGithubLogoFill size={28} className="bg-light rounded-1"/>
                </span>
                </Link>
                <Link to="https://www.behance.net/nimishtiwari2" target="_blank">
                <span>
                <AiOutlineBehance size={28} className="bg-light rounded-1"/>
                </span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Footer Bottom */}
        <div className="text-center mt-3">
          <p className="mb-0 text-light opacity-50 fw-light" style={{fontSize:"13px"}}>
            &copy; 2024 | Created By - Nimish Tiwari
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
