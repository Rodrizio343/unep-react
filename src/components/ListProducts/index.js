import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from 'graphql/querys/products';
import ProductItem from 'components/ProductItem';

const ListProducts = () => {

    const {data, loading, error} = useQuery(GET_ALL_PRODUCTS)
    const {products} = data || "";

    if (loading) return "Cargando.."
    if (error) return "Ups algo salio mal"

    return (
        <div>  
            {products.map((product) => (
                <ProductItem name={product.name} price={product.price} picture={product.picture[0].url} key={product.id}/>
            )) }            
        </div>
        
    )
}

export default ListProducts