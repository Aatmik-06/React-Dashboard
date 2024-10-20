import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
const AddProducts = () => {
  return (
    <>
      <Container id="products-content">
        <div id="head-upload">
          <h4>
            Products Dashboard &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Dashboard&nbsp;
            <FontAwesomeIcon icon={faHouse} /> &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Upload Products&nbsp;
            <FontAwesomeIcon icon={faBriefcase} id="cheveron" /> &nbsp;
          </h4>
        </div>

        <div id="form-main">
        <h1>Add Product&nbsp; <FontAwesomeIcon icon={faBriefcase} id="cheveron" /> </h1>
         <form action="" id="form">
            <div id="form-label">
          <FloatingLabel
            controlId="floatingInput"
            label="Product Name/Description"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Category"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Size"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Brand"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Price"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Stock"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Orders"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Sales"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          </div>
          <div className="d-grid gap-2">
      <Button variant="outline-primary" size="lg">
        Block level button
      </Button>
    </div>

        
          </form>
        </div>
      </Container>
    </>
  );
};
export default AddProducts;
