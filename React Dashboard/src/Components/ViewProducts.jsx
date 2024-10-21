import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
const ViewProducts=()=>{
    return(
        <>
         <Container id="products-content">
        <div id="head-upload">
          <h4>
            Products Dashboard &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Dashboard&nbsp;
            <FontAwesomeIcon icon={faHouse} /> &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; View Products&nbsp;
            <FontAwesomeIcon icon={faBookOpen} id="cheveron" /> &nbsp;
          </h4>
        </div>
        </Container>
        </>
    )
}

export default ViewProducts;