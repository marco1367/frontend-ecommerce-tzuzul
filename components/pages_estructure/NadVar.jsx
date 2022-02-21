import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


export default function NadVar({ height }) {
    return (
        <NadVarContainer height={height} >
            <div>
                <Link href={'/'} className='nav-link' >Inicio</Link>
            </div>
            <div className='navigation-bttns' >
                <Link href={'/products'} className='nav-link' >Productos</Link>
                <Link href={'/productsFireStor'} className='nav-link' >Productos Fire</Link>
            </div>
        </NadVarContainer>
    )
}

const NadVarContainer = styled.div`
    width: 100%;
    height: ${props => props.height && `${props.height}`};
    background-color: #0061b7;
    padding: 0 160px 0 160px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a{
        padding:10px;
        margin: 10px;
        text-decoration: none;
        color:white;
    }

    .navigation-bttns{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`