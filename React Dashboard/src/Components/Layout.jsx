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
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const Layout = ({ name, ...props }) => {
  const options = [{
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const toggleShow = () => setShow((s) => !s);
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
        <Button variant="primary" onClick={toggleShow} className="me-2" id="button">
        {name} Click
      </Button>  
        <Container className="navbar">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as : <a href="#login">Aatmik Kushwaha</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      



      <aside id="side-main">
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
      </aside>



       <div id="hamburger">
      <Offcanvas style={{width:"300px", background: "none"}} show={show} onHide={handleClose} {...props} >

        <aside id="sidebar-ham">
        <Nav defaultActiveKey="/home" className="flex-column" >
          <Nav.Link id="sideitems" as={Link} to="/home">
          <FontAwesomeIcon icon={faHouse} />  Dashboard <Offcanvas.Header closeButton ></Offcanvas.Header> 
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
      </aside>
        
      </Offcanvas>
      </div>
      
      <div id="outlet">
          
        <Outlet/>
      </div>
      
    </>
  );
};

export default Layout;
