import React from 'react'
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { removeToCart } from '../../store/actions/cart';
//components:
import GeneralPage from '../../components/pages_estructure/GeneralPage'

export default function Cart() {
    const dispatch = useDispatch();
    const stateCart = useSelector((state) => state.cart);


    return (
        <>
            <Head>
                <title> Carrito | ecommerce-tzuzul </title>
                <meta name='description' content={'este es tu carrito de compras, donde encontrarar todos tus productos seleccionados antes de realizar el pago.'} />.
                <meta name='author' content='Marco Pablo Demaio' />
                <meta name='copyright' content='Marco Pablo Demaio' />
            </Head>

            <GeneralPage heightNavBar={'80px'} heightFooter={'50px'} >
                <ProductsListContainer>
                    {
                        stateCart.length > 0 ?
                        stateCart.map((product) => (
                            <div className='product-container' >
                                <Link href={`/products/${product?.id_product}`} >
                                    <div className='product-list-details' >
                                        <Image src={product.image} width={50} height={50} />
                                        <p>{product.name}</p>
                                        <p>${product.price}</p>
                                    </div>
                                </Link>
                                <p onClick={() => { dispatch(removeToCart(product?.id_product)) }} >Eliminar</p>
                            </div>
                        ))
                        :
                        <div className='cart-message-container' >
                            <h3>Tu carrito está vacío</h3>
                            <p>¡Comience a elegir los mejores productos!</p>
                        </div>
                    }
                </ProductsListContainer>
            </GeneralPage>
        </>
    )
}


const ProductsListContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    .product-container{
        width:100%;
        height: auto;
        background-color: white;
        padding: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 6px;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);

        display: flex;
        felx-direction: row;
        align-items: center;
        justify-content: space-between;

        .product-list-details{
            cursor: pointer;

            display: flex;
            justify-content: space-between;
            width: 90%;
            align-items: center;
        }

        p{
            padding: 5px;
            cursor: pointer;
        }
    }

    .cart-message-container{
        margin: 60px;
        text-align: center;

        h3{
            font-size: 32px;
            font-weight: inherit;
            color: #666;
            margin: 10px;
        }
        p{
            font-size: 18px;
            font-weight: inherit;
            color: #999;
            margin; 10px;
        }
    }
`