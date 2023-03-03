import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';


function BasicExample() {
    useEffect(() => {
        const links = document.querySelectorAll("nav a");
        links.forEach(link => {
          link.addEventListener("click", event => {
            if (event.target.tagName !== 'a') {
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
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" >
            <div style={{display: 'flex', alignItems: 'center'}}>
        <img className='navPic' src="/images/logoFinal.png" alt="logo"  />
        <h1 className='NavTitle'>Halifax</h1>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navMenu'>Accueil</Nav.Link>
            <Nav.Link href="/AllLangue" className='navMenu'>Langues</Nav.Link>
            <Nav.Link href="/AllFormation" className='navMenu'>Formations</Nav.Link>
            
            <Nav.Link href="/contact" className='navMenu'>Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;