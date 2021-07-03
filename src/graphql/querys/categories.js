import {gql} from '@apollo/client'

const GET_CATEGORIES = gql`
query GetCategories{
    categories{
      name
      products{
            name
      }
    }
  }
`;


export default GET_CATEGORIES;