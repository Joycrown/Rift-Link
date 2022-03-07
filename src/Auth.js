import { useLocation, Navigate } from "react-router-dom"


export const setToken = (access_token) => {
    localStorage.setItem('token', access_token)
}


export const fetchToken = () => {
    return localStorage.getItem('token')
}


export function RequireToken({children}){

    let auth = fetchToken()
    let location = useLocation()


    if (!auth){
        return <Navigate to = '/signin' state = {{from:location}}/>
    }
    return children
}