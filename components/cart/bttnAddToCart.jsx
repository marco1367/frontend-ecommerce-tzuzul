import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';
import styled from 'styled-components';



const Button = styled.button`
    height: ${ props => props.height };
    width: ${ props => props.width };
`



export default function BttnAddToCart({ product, text, height, width }) {
    const dispatch = useDispatch();


    return (
        <Button  
            onClick={ () => dispatch(addToCart(product))} 
            height={height}
            width={width}
        >
            {text}
        </Button>
    )
}


