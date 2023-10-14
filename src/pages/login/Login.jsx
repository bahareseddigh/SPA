import { useState } from 'react'
import MyNavbar from '../../components/navbar/Navbar'
import './Login.css'
function Login(){

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    return(
        <>
        <MyNavbar />
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                <input onChange={ (e) => setUsername(e.target.value) } type="text" placeholder="username"/>
                <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="password"/>
                <button type='button'>login</button>
                </form>
            </div>
        </div>

        </>
    )
}
export default Login