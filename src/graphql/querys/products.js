import {gql} from '@apollo/client'

const GET_ALL_PRODUCTS = gql`
    query GetProducts{
        products{
        name
        price
        id
        picture{
            url
        }
        }
    }
`
export {GET_ALL_PRODUCTS}