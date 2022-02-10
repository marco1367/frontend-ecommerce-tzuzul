import React from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';


//------getStaticPaths------//
export async function getStaticPaths() {
  const resp_products = await axios.get('http://localhost:8000/products');
  const paths = resp_products.data.map((product) =>
   {
      return {params:{
        id: toString(product.id_product)
      }}
    }
  );

  return {
    paths,
    fallback: true
  };
}


//------getStaticProps------//
export async function getStaticProps({params}){
  const resp_product = await axios.get(`http://localhost:8000/products/${params.id}`);

  return {
      props: {
          product: resp_product.data,
      }
  }
};



//------COMPONENTE------//
export default function ProductPage({product}) {
  // const router = useRouter();
  // const {id} = router.query;

  return (
    
    <div> 
      <img src={product?.image} />
      <h2>detalle del producto: {product?.id_product}</h2>
      <h2>nombre: {product?.name} </h2>
      <h2>precio: ${product?.price} </h2>
    </div>
  
  )
}

