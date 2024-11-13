import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { logo } from "../../assets";
import { PrimaryButton, SecondaryButton, LogoutModal } from "../../components";
import "./style.css";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for Logout Modal

  // Handle Logout Modal
  const handleShowLogoutModal = () => setShowLogoutModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);

  const handleLogout = () => {
    localStorage.clear();
    handleCloseLogoutModal();
    window.location.reload();
  };

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
        <Container fluid className="p-0 py-2">
          <Navbar expand="lg" className="mx-xl-5 mx-0 px-2 contain nav">
            <Container fluid className="mx-xl-5 mx-0">
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

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className="rounded-start-4 header-offcanvas"
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
                      onClick={handleClose}
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                      onClick={handleClose}
                    >
                      PROFILE
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                      onClick={handleClose}
                    >
                      SERVICES
                    </NavLink>
                    <NavLink
                      to="/portfolio"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                      onClick={handleClose}
                    >
                      PORTFOLIO
                    </NavLink>
                    <NavLink
                      to="/connect"
                      className={({ isActive }: { isActive: boolean }) =>
                        isActive ? "header-nav active-nav" : "header-nav"
                      }
                      onClick={handleClose}
                    >
                      CONNECT
                    </NavLink>
                    {!userId ? (
                      <Link to="/login">
                        <SecondaryButton text="Login" />
                      </Link>
                    ) : (
                    <div>
                        <button
                        className="py-2 px-4 rounded-pill green-border secondary-btn fw-medium "
                        onClick={handleShowLogoutModal}
                      >
                        Logout
                      </button>
                    </div>
                    )}

                    <Link to="/connect">
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
                {!userId ? (
                  <Link to="/login">
                    <SecondaryButton text="Login" />
                  </Link>
                ) : (
                  <button
                    className="py-2 px-4 rounded-pill green-border secondary-btn fw-medium"
                    onClick={handleShowLogoutModal}
                  >
                    Logout
                  </button>
                )}
                <Link to="/connect">
                  <PrimaryButton text="Hire Me" />
                </Link>
              </div>
            </Container>
          </Navbar>
        </Container>
      </header>
      {/* Logout Modal */}
      <LogoutModal
        show={showLogoutModal}
        onHide={handleCloseLogoutModal}
        title="Are you sure you want to logout?"
        body="Click Yes to logout, or Cancel to stay logged in."
        onLogout={handleLogout}
      />
    </>
  );
};

export default Header;
