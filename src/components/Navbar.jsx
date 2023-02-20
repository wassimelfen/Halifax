import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="halifaxWord">Halifax</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/langue" className="nav-link">
                Langues
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formation" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/galerie" className="nav-link">
                Galerie
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contactez Nous
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
