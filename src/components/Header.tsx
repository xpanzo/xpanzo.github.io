import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

/**
 * Button with blue color border and fluent ui
 */
const LetsTalk = styled(Nav.Link)`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #007bff;
  color: black;
  font-weight: bold;
  padding: 5px 20px;
`;

/**
 * Header component with navigation bar
 */
export default function Header() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container fluid={true}>
        <Navbar.Brand href="#home">
          <img src={require("../assets/images/xpanzo.png")} alt="Xpanzo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-toggle" />
        <Navbar.Collapse id="nav-toggle" className="justify-content-end">
          <Nav>
            <Nav.Link className='mx-lg-3' href="#home">Home</Nav.Link>
            <Nav.Link className='mx-lg-3' href="#services">Services</Nav.Link>
            <Nav.Link className='mx-lg-3' href="#aboutus">About Us</Nav.Link>
            <Nav.Link className='mx-lg-3' href="#contact">Contact Us</Nav.Link>
            <LetsTalk className='mx-lg-3' href="#contact">Lets Talk</LetsTalk>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
