import {gql} from '@apollo/client'

const GET_CATEGORIES = gql`
query GetCategories{
  categories{
    name
    products{
      name
      id
      price
      picture{
        url
      }
    }
  }
}
`;


export default GET_CATEGORIES;