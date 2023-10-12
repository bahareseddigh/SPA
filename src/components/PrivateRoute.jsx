import { Children } from "react"
import { Navigate } from "react-router-dom"

function PrivateRoute({children}){

    const isLogin = (username) => {
        if(username == 'admin') return true
        return false
    }

    return(
        <>
            { isLogin('admin') ? children : <Navigate to='/' /> }
        </>
    )
}
export default PrivateRoute