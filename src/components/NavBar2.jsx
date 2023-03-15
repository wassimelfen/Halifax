import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";

function BasicExample() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.target.tagName !== "a") {
          return;
        }
        event.preventDefault();
        const id = event.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);
  return (
    <Navbar bg="white" expand="lg" sticky="top" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <div
            className="NavLogo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img className="navPic" src="/images/logoFinal.png" alt="logo" />
            <h3 className="NavTitle">Halifax</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="navMenu">
              Accueil
            </Nav.Link>

            <NavDropdown
              title="Langues"
              id="basic-nav-dropdown"
              className="navMenu"
            >
              <NavDropdown.Item href="/anglais">Anglais</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/francais">Français</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/Allemand">Allemand</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/details/italien">
                Italien
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/certif">
                Préparation aux tests de langues
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Formations"
              id="basic-nav-dropdown"
              className="navMenu"
            >
              <NavDropdown.Item href="/management">Management</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/informatique">
                Informatique
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact" className="navMenu">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
