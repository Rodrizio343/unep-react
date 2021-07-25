import React from 'react'
import { useQuery } from '@apollo/client'
import {GET_ALL_POSTS} from 'graphql/querys/posts';
import PostItem from 'components/PostItem'
import './ListPosts.css'
import Spinner from 'components/Spinner';

const ListPosts = () => {
    const {data, error, loading} = useQuery(GET_ALL_POSTS)
    const {posts} = data || "";

    if(loading) return <Spinner />
    if(error) return "Ups, algo salio mal..."

    return (
        <div className="posts-grid">
            {posts.map((post) => ( 
                <PostItem title={post.title} description={post.content} key={post.id} id={post.id}/>
                ))
            }
        </div>
    )
}

export default ListPosts
