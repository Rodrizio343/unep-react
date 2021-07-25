import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CarritoCompras from 'components/CarritoCompras'

const Layout = (props) => {
    return (
    <>
       <Header />
       <CarritoCompras />
            {props.children}
       <Footer />
    </>
    
    )
}

export default Layout
