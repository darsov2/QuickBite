import React, {useState} from "react";
import {Col, Image, Row} from "react-bootstrap";
import useGet from "../Hooks/useGet";
import MenuDetailsModal from "./MenuDetailsModal";

const MenuItem = (props) => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }
    console.log(props)
    return (
        <>
            <Col onClick={() => setShowModal(true)} md={3}>
                <Row style={{overflow: 'hidden'}}>
                    <Image style={{maxHeight: '50vh'}}
                           className ={"shadow"}
                           src={encodeURI('http://localhost:8080/download?fileName=' + props.data.images[0].imageUrl)}></Image>
                </Row>
                <Row className={"mb-0"}>
                    <h4>{props.data.name}</h4>
                </Row>
                <Row className={"mt-0"}>
                    <h5 className={"mt-0"}>{props.data.price} $</h5>
                </Row>
            </Col>

            <MenuDetailsModal show={showModal} handleClose={handleClose}
                              img={encodeURI('http://localhost:8080/download?fileName=' + props.data.images[0].imageUrl)}
                              title={props.data.name}
                              ingredients={"Ingredients: " + props.data.ingredients.map(ingr => ingr.name).join(', ')} price={props.data.price + '$'}></MenuDetailsModal>

        </>
    )
}

export default MenuItem;