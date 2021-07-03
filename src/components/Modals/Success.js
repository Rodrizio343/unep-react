import { useState, useEffect, useCallback } from 'react';
import { Modal, Button} from 'antd';
import { useLocation } from 'wouter';

const Success = ({message, route, modalVisibility, title}) => {
    const [visible, setVisible] = useState(false)
    const [, navigate] =useLocation()
    
    const showModal = useCallback(() => {
        setVisible(modalVisibility)
    }, [modalVisibility]);

    useEffect(() => {
        showModal()
    }, [modalVisibility, showModal])

    const handleOk = () => {
        navigate(route)
    }
    return(

    <Modal
        visible={visible}
        onOk={handleOk}
        title={title}
        footer={[
            <Button key="ok" type="success" onClick={handleOk}>
              Ok
            </Button>
        ]}
    >
        {<p>
            {message}    
        </p>}

    </Modal>)
}



export default Success