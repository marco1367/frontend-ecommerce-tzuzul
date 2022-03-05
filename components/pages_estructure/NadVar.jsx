import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import logo from '../../public/PinaShop (2).png'
import Image from 'next/image'


export default function NadVar({ height }) {
    const stateCart = useSelector((state)=>state.cart);

    return (
        <NadVarContainer height={height} >
            <div className='logo-container' >
                <Link href="/" >
                    <Image src={logo} width={210} height={50} objectFit='cover' />
                </Link>
            </div>
            <div className='navigation-bttns' >
                <Link href={'/products'} >Productos</Link>
                {/* <Link href={'/productsFireStor'} >Productos Fire</Link> */}
                <Link href={'/cart'} ><p>Carrito {stateCart.length}</p></Link> 
                <Link href={'/createaccount'} ><p>Creá tu cuenta</p></Link> 
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

    a,p{
        padding:0;
        margin: 10px;
        text-decoration: none;
        color:white;
        cursor: pointer;
    }

    .logo-container{
        height:100%;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }    

    .navigation-bttns{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`