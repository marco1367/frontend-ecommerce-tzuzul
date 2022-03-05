import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useSelector ,useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../store/actions/cart/index";
//components:
import GeneralPage from '../../components/pages_estructure/GeneralPage';



//------getStaticPaths------//
export async function getStaticPaths() {

    const resp_products = await axios.get(`https://db-ecommerce-tzuzul.herokuapp.com/products`);
    // const resp_products = await axios.get(`http://localhost:8000/products`);


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
    // const resp_product = await axios.get(`http://localhost:8000/products/${params?.id}`);


    return {
        props: {
            product: resp_product?.data,
        }
    }
};



//------COMPONENTE------//
export default function ProductPage({ product }) {
    const dispatch = useDispatch();
    const stateCart = useSelector((state)=>state.cart);    


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
                    <button onClick={ () => dispatch(addToCart(product))} >Agregar al carrito</button>
                    <button onClick={ () => dispatch(removeToCart(product.id_product))} >Eliminar del carrito</button>
                </div>
            </GeneralPage>
        </>

    )
}