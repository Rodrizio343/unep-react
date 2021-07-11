import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST } from 'graphql/querys/posts'
import Spinner from 'components/Spinner'

const Post = ({params}) => {
    const id = params.id
    const {data, error, loading} = useQuery(GET_POST, {variables:{
      id
    }})

    if(loading) return <Spinner />

    if(error) return 'Upss algo salio mal'

    const {post} = data

    return (
        <>
          <h1>{post.title}</h1>  
        </>
    )
}

export default Post
