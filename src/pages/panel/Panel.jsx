import { Navigate } from 'react-router-dom'
import MyNavbar from '../../components/navbar/Navbar'
import './Panel.css'
function Panel(){

    const isLogin = (username) => {
        if(username == 'admin') return true
        return false
    }

    return(
        <>
        { isLogin('admin') ? (
            <>
            <MyNavbar />
            <h1>Panel Page</h1>
            </>
        ) : (
            <Navigate to='/' />
        )}
        </>
    )
}
export default Panel