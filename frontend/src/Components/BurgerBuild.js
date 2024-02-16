import React from "react";
import {Container, Image} from "react-bootstrap";
import {ImGift} from "react-icons/im";

const BurgerBuild = (props) => {

    const topBun = (<Container fluid style={{marginBottom: '-3%', zIndex: props.arr.length + 1, position:'relative'}}>
        <Image fluid src={'https://burger-builder.danajanoskova.sk/img/bun-top.3912bba0.svg'}></Image>
    </Container>)
    const bottomBun = (<Container style={{zIndex: '0', position:'relative'}}>
        <Image fluid src={'https://burger-builder.danajanoskova.sk/img/bun-bottom.4bf3a632.svg'}></Image>
    </Container>)
    const meat = (z) => {
        return (<Container fluid style={{marginBottom: '-1%', zIndex: z, position: 'relative'}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/meat.429d04c4.svg'}></Image>
        </Container>)
    }
    const cheese = (z) => {
        return (<Container fluid style={{marginBottom: '-10%',  zIndex: z, position: "relative"}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/cheese.8f1142e8.svg'}></Image>
        </Container>)
    }
    const bacon = (z) => {
        return (<Container style={{marginBottom: '-4%', zIndex: z, position: "relative"}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/bacon.9d2af67e.svg'}></Image>
        </Container>)
    }
    const egg = (z) => {
        return (<Container style={{marginBottom: '-9%', zIndex: z, position: "relative"}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/egg.dea9800c.svg'}></Image>
        </Container>)
    }
    const pickles = (z) => {
        return (<Container style={{marginBottom: '-7%', zIndex: z, position: "relative"}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/pickles.69682681.svg'}></Image>
        </Container>)
    }
    const salad = (z) => {
        return (<Container style={{marginBottom: '-7%', marginTop: '-3%', zIndex: z, position: "relative"}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/salad.21c621b3.svg'}></Image>
        </Container>)
    }
    const tomatoes = (z) => {  return (<Container style={{marginBottom: '-1%', zIndex: z, position: "relative"}}>
        <Image fluid src={'https://burger-builder.danajanoskova.sk/img/tomato.7c56fbf9.svg'}></Image>
    </Container>) }
    const mayo = (z) => {
        return (<Container style={{marginBottom: '-8%', zIndex: z, position: "relative", maxWidth: '100% '}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/mayo.e84a52a7.svg'}></Image>
        </Container>)
    }
    const ketchup = (z) => {
        return (<Container style={{marginBottom: '-8%', zIndex: z, position: "relative", maxWidth: '100% '}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/ketchup.eb85a411.svg'}></Image>
        </Container>)
    }
    const oniom = (z) => {
        return (<Container style={{marginBottom: '-1%', zIndex: z, position: "relative", maxWidth: '100% '}}>
            <Image fluid src={'https://burger-builder.danajanoskova.sk/img/onions.3c50f0c1.svg'}></Image>
        </Container>)
    }

    // const burgerIngredients = ['topBun', 'tomatoes', 'onion', 'tomatoes', 'pickles', 'egg', 'salad', 'bacon', 'cheese', 'tomatoes', 'meat', 'mayo', 'ketchup', 'bottomBun']
    const burgerIngredients = props.arr;
    return (
        <>
            <Container className={'mt-5'}>
                {burgerIngredients.map((ingredient, i) => {
                    if (ingredient === 'topBun') {
                        return topBun;
                    } else if (ingredient === 'bottomBun') {
                        return bottomBun;
                    }
                    else if(ingredient === 'meat')
                    {
                        return meat(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'cheese')
                    {
                        return cheese(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'bacon')
                    {
                        return bacon(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'egg')
                    {
                        return egg(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'pickles')
                    {
                        return pickles(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'salad')
                    {
                        return salad(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'tomatoes')
                    {
                        return tomatoes(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'mayo')
                    {
                        return mayo(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'ketchup')
                    {
                        return ketchup(burgerIngredients.length - (i+1));
                    }
                    else if(ingredient === 'onion')
                    {
                        return oniom(burgerIngredients.length - (i+1));
                    }
                    return (<></>)
                })}
            </Container>
        </>
    )
}

export default BurgerBuild;