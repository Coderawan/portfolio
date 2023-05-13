import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{textAlign:"center",display:"flex"}}>
        <Container >
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link> <Link to="/" style={{textDecoration:"none",color:"gray"}}>Home</Link></Nav.Link>
           <Nav.Link> <Link to="/about" style={{textDecoration:"none",color:"gray"}}>About me</Link></Nav.Link>
           <Nav.Link> <Link to="/gallery" style={{textDecoration:"none",color:"gray"}}>Gallery</Link></Nav.Link>
           <Nav.Link> <Link to="/contact" style={{textDecoration:"none",color:"gray"}}>Contact me</Link></Nav.Link>
           <Nav.Link> <Link to="/service" style={{textDecoration:"none",color:"gray"}}>Service</Link></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
   
    </>
  );
}

export default Header;