import { useMutation } from "@apollo/client"
import Context from "context/UserContext"
import LOGIN from "graphql/auth/login"
import { useCallback, useContext } from "react"
import { useLocation } from "wouter"

const useUser = () => {
    const {jwt, setJWT} = useContext(Context)
    const [DoLogin] = useMutation(LOGIN)
    const [,navigate] = useLocation()

    const login = useCallback(async({email, password}) => {
        try {
            const data = await DoLogin({
                variables:{
                    input:{
                        identifier: email,
                        password
                    }
                }
            })
            const JWTnew = data.data.login.jwt
            window.localStorage.setItem('jwt', JWTnew)
            setJWT(JWTnew)
            navigate('/')   
        } catch (error) {
            console.log(error)
        }
    },[setJWT, DoLogin, navigate])


    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return{
        isLogged: Boolean(jwt),
        login,
        logout
    }
}

export default useUser
