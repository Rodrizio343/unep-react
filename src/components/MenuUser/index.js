import React from 'react'
import useUser from 'hooks/useUser'
import { Link } from 'wouter'

const MenuUser = () => {

    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    return (
        <div>
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
        </div>
    )
}

export default MenuUser

