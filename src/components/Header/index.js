import React from 'react'
import useUser from 'hooks/useUser'
import { Link } from 'wouter'

const Header = () => {

    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }
    
    return (
        <header style={{display:'flex', justifyContent:'flex-end', padding:'16px'}}>
            {
                isLogged
                ? <button onClick={handleClick}>
                    Logout
                </button>
                : <Link to='/login'>
                    Login
                </Link>
            }
            <Link to='/register' style={{marginLeft:"10px"}}>Registro</Link>
        </header>
    )
}

export default Header
