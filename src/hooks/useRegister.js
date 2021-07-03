import {useContext, useState} from 'react'
import { useMutation } from '@apollo/client'
import REGISTER from 'graphql/auth/register'
import Context from 'context/UserContext'

const useRegister = () => {
    const [registered, setRegistered] = useState(false)
    const [DoRegister] = useMutation(REGISTER);
    const {setJWT} = useContext(Context)
    
    const register = async ({username, email, password}) => {
        try {
            const data = await DoRegister({
                variables:{
                    input:{
                        username,
                        email,
                        password
                    }
                }
            })
            const JWTnew = data.data.register.jwt;
            window.localStorage.setItem('jwt', JWTnew)
            setJWT(JWTnew)

        } catch (error) {
            window.localStorage.removeItem('jwt')
            console.log(error)
        }
    }

    return{register, registered, setRegistered}
}

export default useRegister