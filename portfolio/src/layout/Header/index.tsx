import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { logo } from "../../assets";
import { PrimaryButton, SecondaryButton } from "../../components";
import "./style.css";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <Container fluid className="p-0 bg-gray">
          <Navbar
            expand="lg"
            className="px-2 mx-lg-5 mx-xl-5 mx-0 px-md-4 contain nav"
          >
            <Container fluid className="mx-xl-5 mx-lg-5 mx-0">
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="Logo" className="logo-header" />
                </Link>
              </Navbar.Brand>

              <button
                className="d-lg-none border-0 bg-transparent custom-secondary-f"
                onClick={handleShow}
              >
                <FaBars size={22} />
              </button>

              {/* Offcanvas for small screens */}
              <Offcanvas show={show} onHide={handleClose} placement="end" className="rounded-start-4">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="flex-column gap-3 text-center">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      PROFILE
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      SERVICES
                    </NavLink>
                    <NavLink
                      to="/portfolio"
                      className={({ isActive }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      PORTFOLIO
                    </NavLink>
                    <NavLink
                      to="/connect"
                      className={({ isActive }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      CONNECT
                    </NavLink>

                    <Link to="/login">
                  <SecondaryButton text="Login" />
                </Link>
                <Link to="/hire">
                  <PrimaryButton text="Hire Me" />
                </Link>
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>

              {/* Centered navigation for larger screens */}
              <Nav className="m-auto gap-5 d-none d-lg-flex">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  PROFILE
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  SERVICES
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  PORTFOLIO
                </NavLink>
                <NavLink
                  to="/connect"
                  className={({ isActive }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  CONNECT
                </NavLink>
              </Nav>

              <div className="d-none d-lg-flex align-items-center gap-3">
                <Link to="/login">
                  <SecondaryButton text="Login" />
                </Link>
                <Link to="/hire">
                  <PrimaryButton text="Hire Me" />
                </Link>
              </div>
            </Container>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
