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
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={title} description={description} />
            <Button type='primary' onClick={handleClick}>Ver post</Button>
        </Card>)
}

export default PostItem
