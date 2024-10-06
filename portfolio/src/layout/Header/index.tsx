import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { logo } from "../../assets"; // Assuming you have the logo in your assets
import { PrimaryButton, SecondaryButton } from "../../components"; // Assuming you have these components
import "./style.css";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <Container fluid className="p-0 py-2 bg-gray">
          <Navbar expand="lg" className="mx-lg-5 mx-xl-5 mx-0 px-2 contain nav">
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
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className="rounded-start-4"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Link to="/">
                      <img src={logo} alt="Logo" className="logo-header" />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="flex-column gap-4 text-center mt-5">
                    <NavLink
                      to="/"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      PROFILE
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      SERVICES
                    </NavLink>
                    <NavLink
                      to="/portfolio"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                    >
                      PORTFOLIO
                    </NavLink>
                    <NavLink
                      to="/connect"
                      className={({ isActive }: { isActive: boolean }) =>
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
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  PROFILE
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  SERVICES
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "header-nav active-nav" : "header-nav"
                  }
                >
                  PORTFOLIO
                </NavLink>
                <NavLink
                  to="/connect"
                  className={({ isActive }: { isActive: boolean }) =>
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
