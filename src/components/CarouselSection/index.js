import React from 'react'
import CarouselProducts from 'components/CarouselProducts'
import { useQuery } from '@apollo/client'
import GET_CATEGORIES from 'graphql/querys/categories'
import Spinner from 'components/Spinner'


const CarouselSection = () => {

    const {data, loading, error} = useQuery(GET_CATEGORIES)
    
    if (loading) return <Spinner />
    if (error) return "Ups algo salio mal"

    const {categories} = data || "";

    return (
        <div>
          {categories.map((category) => <CarouselProducts products={category.products}/>)}
        </div>
    )
}

export default CarouselSection
