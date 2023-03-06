import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NavBar2() {
    return (
        <>
            <Navbar bg="secondary" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/Proyecto/public/supplier" style={{ fontSize: '40px' }} >Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={Link} to="/Proyecto/public/supplier">Supplier</Nav.Link>
                            <Nav.Link as={Link} to="/Proyecto/public/category">Category</Nav.Link>
                            <Nav.Link as={Link} to="/Proyecto/public/product">Product</Nav.Link>
                            <Nav.Link as={Link} to="/Proyecto/public/sales">Sales</Nav.Link>
                            <Nav.Link as={Link} to="/Proyecto/public/users">Users</Nav.Link>
                            <Nav.Link as={Link} to="/Proyecto/public/detail">Details</Nav.Link>
                        </Nav>
                        <Button as={Link} to="/Proyecto/public/" variant="dark" style={{ borderWidth: 3 }}>
                            Back
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default NavBar2;