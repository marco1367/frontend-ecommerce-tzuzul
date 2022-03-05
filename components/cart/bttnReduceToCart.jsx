import React from 'react'
import { useDispatch } from 'react-redux';
import { reduceToCart } from '../../store/actions/cart';
import styled from 'styled-components';



const Button = styled.button`
    height: ${ props => props.height };
    width: ${ props => props.width };
`



export default function BttnReduceToCart({ productId, text, height, width }) {
    const dispatch = useDispatch();


    return (
        <Button  
            onClick={ () => dispatch(reduceToCart(productId))} 
            height={height}
            width={width}
        >
            {text}
        </Button>
    )
}