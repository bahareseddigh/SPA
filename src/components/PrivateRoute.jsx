import { Navigate } from "react-router-dom"

function PrivateRoute({children}){

    return(
        <>
            { isLogin('admin') ? children : <Navigate to='/' /> }
        </>
    )
}
export default PrivateRoute