import {gql} from '@apollo/client'

const REGISTER = gql`
    mutation DoRegister($input: UsersPermissionsRegisterInput!){
        register(input: $input){
        user{
            id
            username
            email
        }
        jwt
        }
    } 
`

export default REGISTER;