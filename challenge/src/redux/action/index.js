export const Login = (creds) => {
    return{
        type : 'LOGIN',
        payload : creds
    }
}

export const Logout = (creds) => {
    return{
        type : 'LOGOUT',
        payload : creds
    }
}