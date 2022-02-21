import React from 'react';
//styled:
import styled from 'styled-components';
//components:
import CardProduct from './CardProduct';


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    width: 100%;
    height: auto;
    justify-content: center;
    grid-gap: 15px;
`


export default function GridContainer({products}) {

    return (
        <Grid>
            {
                products.map((product) => <CardProduct product={product} />)
            }
        </Grid>
    )
};

