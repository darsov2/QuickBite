import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const IngredientButtons = (props) => {
    return(
        <>
            <Container className={'my-3'}>
                <Row className={'align-items-center'}>
                    <Col className={'align-items-center'}>
                        <h3 style={{verticalAlign: 'middle', marginBottom: '0'}}>{props.ingredient}</h3>
                    </Col>
                    <Col className={'col-auto'}>
                        <Button onClick={() => {
                            props.ingredientsArr(prevState => {
                                return [
                                    prevState[0],
                                    props.ingredient,
                                    ...prevState.slice(1)
                                ]
                                // prevState.concat(props.ingredient)
                            })
                        }} className={'px-4 py-0 mx-2'} style={{backgroundColor: '#9dcb2c', fontSize: '2.5rem'}}>{'+'}</Button>
                        <Button onClick={() => {
                            props.ingredientsArr(prevState => {
                                const index = prevState.indexOf(props.ingredient);
                                console.log(index)
                                if(index !== -1)
                                {
                                    // prevState.splice(index, 1);
                                    return [
                                        ...prevState.slice(0, index),
                                        ...prevState.slice(index + 1)
                                    ]
                                }
                                console.log(prevState)
                                return prevState;
                            })
                        }} className={'px-4 py-0 mx-2'} style={{backgroundColor: 'lightgray', fontSize: '2.5rem'}}>-</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IngredientButtons;