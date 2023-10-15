import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.css";
import { BiLogIn } from "react-icons/bi";
import { BsFillCartDashFill } from "react-icons/bs";
import "./index.css";
import { useState } from "react";

function NavbarLaw() {
  let [wi, setcol] = useState(0);
  const Change = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setcol(10);
    } else {
      setcol(0);
    }
  };
  // window.onscroll = () => Change();

  return (
    <div className="nav-body">
      <Navbar
        key="lg"
        expand="lg"
        className="mb-3 top fixed-top"
        style={{
          boxShadow: `0px 0px 2px 0px lightgrey`,
          height: "70px",
          background: "#06142e",
          color: "white",
        }}
      >
        <Container fluid>
          <Navbar.Brand className="title">
            <div className="logo-outer">
              <div className="LogoImg">Emart</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
            className="close"
          >
            {/* <div className="outer">
              <div className="inner"></div>
              <div className="inner" style={{ width: "27px" }}></div>
              <div className="inner"></div>
            </div> */}
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            style={{ backgroundColor: "#06142e" }}
          >
            <Offcanvas.Header closeButton className="close">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Emart
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end  flex-grow-1 pe-3"
                style={{ backgroundColor: " #06142e" }}
              >
                <Nav.Link className="nav-item" href="/">
                  About
                </Nav.Link>
                <Nav.Link className="nav-item" href="/">
                  Support
                </Nav.Link>
                <Nav.Link className="nav-item" href="/">
                  Contact
                </Nav.Link>
                <Nav.Link className="nav-item" href="/">
                  <BsFillCartDashFill className="cart" />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarLaw;
