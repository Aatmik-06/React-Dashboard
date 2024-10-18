import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/Main-logo.png";
const Layout = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" id="navbar">
     <Navbar.Brand as={Link} to="./home">
          <img src={logo} alt="logo" style={{height:"60px"}}/>
          Products Dashboard
        </Navbar.Brand>     
        <Container className="navbar">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Aatmik Kushwaha</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      <aside>
        <Nav defaultActiveKey="/home" className="flex-column" id="sidebar">
          <Nav.Link id="sideitems" as={Link} to="/home">
            Dashboard
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/viewproducts">
            View Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/addproducts">
            Add Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/searchproducts">
            Search Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/updateproducts">
            Update Products
          </Nav.Link>
          <Nav.Link id="sideitems" eventKey="disabled" disabled>
            Logout
          </Nav.Link>
        </Nav>
        <Outlet/>
      </aside>
      
    </>
  );
};

export default Layout;
