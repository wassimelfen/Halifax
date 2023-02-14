import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Halifax</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero">Accueil</Nav.Link>
            <Nav.Link href="#langues">Langues</Nav.Link>
            <Nav.Link href="#formations">Formations</Nav.Link>
            <Nav.Link href="#galerie">Galerie</Nav.Link>
            <Nav.Link href="#contact">Contactez Nous</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

