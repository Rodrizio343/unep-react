import React from 'react'
import MenuHeader from 'components/MenuHeader'
import MenuUser from 'components/MenuUser'

const Header = () => {
    
    return (
        <>
        <header style={{display: "flex", justifyContent:"space-between"}}>
            <MenuHeader />
            <MenuUser />
        </header>
        </>
    )
}

export default Header
