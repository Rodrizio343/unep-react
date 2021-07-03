import {gql} from '@apollo/client'

const GET_ALL_POSTS = gql`
    query GetPosts {
        posts{
        content
        title
        id
        }
    }
`

const GET_POST = gql`
    query DoGetPost($id: ID!){
        post(id: $id){
        title
        content
        }
    }
`

export {GET_ALL_POSTS, GET_POST}