import React, {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import BurgerBuild from "./BurgerBuild";
import IngredientButtons from "./IngredientButtons";

const BurgerIngredients = () => {
    const [ingredients, setIngredients] = useState(['topBun', 'bottomBun'])

    return(
        <>
            <Container className={'my-5'}>
                <Row>
                    <Col>
                        <BurgerBuild arr={ingredients}></BurgerBuild>
                    </Col>
                    <Col>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'meat'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'cheese'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'bacon'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'egg'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'pickles'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'onion'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'salad'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'tomatoes'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'ketchup'}></IngredientButtons>
                        <IngredientButtons ingredientsArr={setIngredients} ingredient={'mayo'}></IngredientButtons>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BurgerIngredients;