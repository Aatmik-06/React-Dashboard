import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/Main-logo.png";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Layout = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" id="navbar">
     <Navbar.Brand as={Link} to="./home" id="logo">
     <div>
        <img src={logo} alt="logo" style={{height:"60px"}}/>
     </div>
         <div>
         <h2>Products <br /> <h5> Dashboard</h5> </h2>
         </div>
        </Navbar.Brand>     
        <Container className="navbar">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as : <a href="#login">Aatmik Kushwaha</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      <aside>
        <Nav defaultActiveKey="/home" className="flex-column" id="sidebar">
          <Nav.Link id="sideitems" as={Link} to="/home">
          <FontAwesomeIcon icon={faHouse} /> Dashboard
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/viewproducts">
          <FontAwesomeIcon icon={faBookOpen} /> View Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/addproducts">
          <FontAwesomeIcon icon={faBriefcase} /> Upload Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/searchproducts">
          <FontAwesomeIcon icon={faMagnifyingGlass} />  Search Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/updateproducts">
          <FontAwesomeIcon icon={faFilePen} />  Update Products
          </Nav.Link>
          <Nav.Link id="sideitems" as={Link} to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </Nav.Link>
        </Nav>
        <div id="outlet">
        <Outlet/>
        </div>
      </aside>
      
    </>
  );
};

export default Layout;
