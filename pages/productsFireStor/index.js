import React from 'react';
import axios from 'axios';
import Head from 'next/head'


//components:
import GridContainer from '../../components/GridContainer';

export async function getServerSideProps(context){
    try {
        const resp_products = await axios.get(`${context.req.headers.host}/api/productosFireBase`);        
        return {
            props: {
                products: resp_products.data,
            }
        }
    } catch (error) {
        console.log(error);
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
            <GridContainer products={products} />
        </>
    )
};
