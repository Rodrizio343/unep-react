import React from 'react'
import { Card, Button } from 'antd';
import { useLocation } from 'wouter';

const { Meta } = Card;

const PostItem = ({title, description, id}) => {
    
    const [, navigate] = useLocation()
    const handleClick = () => {
        navigate(`/post/${id}`)
    }

    return(
        <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="https://www.coldist.com/wp-content/uploads/2019/07/Friends-Toasting-With-Wine.jpg" />}
        >
            <Meta title={title} description={description} />
            <Button type='primary' onClick={handleClick}>Ver post</Button>
        </Card>)
}

export default PostItem
