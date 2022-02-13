import React from 'react';
import axios from 'axios';


//components:
import GridContainer from '../../components/GridContainer';

export async function getStaticProps(){

    // const URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

    const resp_products = await axios.get(`https://db-ecommerce-tzuzul.herokuapp.com/products`);

    return {
        props: {
            products: resp_products.data,
        }
    }
};

export default function ProductsPage({products}) {

    return (
        <GridContainer products={products} />
    )
};
