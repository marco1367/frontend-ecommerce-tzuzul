import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
//styled:
import styled from 'styled-components';


const Card = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    background-color: #ffffff;
    height: auto;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
    cursor: pointer;

    .product-price{
        color: #333;
        font-size: 24px;
        font-weight: 400;
        width:100%;
    }

    .product-title{
        width:100%;
        color: #333;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.3;
        margin-top: 10px;
    }

`

export default function CardProduct({ product }) {

    return (
        <Link href={`/products/${product?.id_product}`} key={product?.id_product} >
            <Card key={product?.name} >
                <Image src={product?.image} width={200} height={200} />
                <div style={{ width: '100%', height: 'auto' }} >
                    <span className='product-price' > $ {product?.price} </span>
                    <h2 className='product-title' > {product?.name} </h2>
                </div>
            </Card>
        </Link>
    )
};





