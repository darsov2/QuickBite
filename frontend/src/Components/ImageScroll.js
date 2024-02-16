import React from "react";
import {Col, Image, Row} from "react-bootstrap";

const ImageScroll = (props) => {
   return(
       <>

           <Col className={'meal-photo-cont'} md={3}>
        <Image  onClick={props.handleShow} className={'meal-photo'} fluid src={props.img}/>
    </Col>
       </>
   )
}

export default ImageScroll;

