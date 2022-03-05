import React from 'react';
import axios from 'axios';
import Head from 'next/head'
//components:
import GeneralPage from '../../components/pages_estructure/GeneralPage';
import GridContainer from '../../components/GridContainer';



export async function getStaticProps(){

    // const resp_products = await axios.get(`https://db-ecommerce-tzuzul.herokuapp.com/products`);
    const resp_products = await axios.get(`http://localhost:8000/products`);


    return {
        props: {
            products: resp_products.data,
        }
    }
};

export default function ProductsPage({products}) {

    return (
        <>
            <Head>
                <title>productos | ecommerce-tzuzul</title>
                <meta name='author' content='Marco Pablo Demaio' />
                <meta name='copyright' content='Marco Pablo Demaio' />
            </Head>
            <GeneralPage heightNavBar={'80px'} heightFooter={'50px'} >
                <GridContainer products={products} />
            </GeneralPage>
        </>
    )
};
