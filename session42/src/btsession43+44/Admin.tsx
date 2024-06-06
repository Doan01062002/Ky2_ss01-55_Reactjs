import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Admin() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <p className='color-red-500'>11111</p>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='nav-link'>
              <span className="material-symbols-outlined">home</span>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>
            <span className="material-symbols-outlined">list</span>
              <span>Contents</span>
            </Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>
            <span className="material-symbols-outlined">segment</span>
              <span>Category</span>
            </Nav.Link>
            <Nav.Link href="#pricing" className='nav-link'>
            <span className="material-symbols-outlined">settings</span>
              <span>Setting</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='border-r-5 border-solid border-black'>
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Admin;