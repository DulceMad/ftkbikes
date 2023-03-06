import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Foot from './Foot';

function NavBar() {
  return (
    <>
    <div >
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/Proyecto/public/home"style={{fontSize:'40px'}} >FTK BIKES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/Proyecto/public/bikes">Products</Nav.Link>
            </Nav>
            <Form className="d-flex">              
                <Button as={Link} to="/Proyecto/public/login"variant="outline-secondary"  style={{borderWidth:3}}>
                <img src="https://cdn-icons-png.flaticon.com/512/7595/7595547.png" height ="30" width="30"/>
                </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
      </div> 
      <Foot/>
    </>
  );
}

export default NavBar;