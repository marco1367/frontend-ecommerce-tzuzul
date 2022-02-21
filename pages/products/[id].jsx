import React from 'react';
import axios from 'axios';
import Head from 'next/head';
//components:
import GeneralPage from '../../components/pages_estructure/GeneralPage';



//------getStaticPaths------//
export async function getStaticPaths() {

    const resp_products = await axios.get(`https://db-ecommerce-tzuzul.herokuapp.com/products`);

    const paths = resp_products?.data?.map((product) => {
        const res = {
            params: {
                id: '' + product?.id_product
            }
        }
        return res;
    });

    return {
        paths,
        fallback: false
    };
}


//------getStaticProps------//
export async function getStaticProps({ params }) {

    const resp_product = await axios.get(`https://db-ecommerce-tzuzul.herokuapp.com/products/${params?.id}`);

    return {
        props: {
            product: resp_product?.data,
        }
    }
};



//------COMPONENTE------//
export default function ProductPage({ product }) {
    // const router = useRouter();
    // const {id} = router.query;

    return (
        <>
            <Head>
                <title> {product?.name} | ecommerce-tzuzul </title>
                <meta name='description' content={product?.name} />.
                <meta name='author' content='Marco Pablo Demaio' />
                <meta name='copyright' content='Marco Pablo Demaio' />
            </Head>
            <GeneralPage heightNavBar={'80px'} heightFooter={'50px'} >
                <div>
                    <img src={product?.image} />
                    <h2>detalle del producto: {product?.id_product}</h2>
                    <h2>nombre: {product?.name} </h2>
                    <h2>precio: ${product?.price} </h2>
                </div>
            </GeneralPage>
        </>

    )
}