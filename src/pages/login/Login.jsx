import MyNavbar from '../../components/navbar/Navbar'
import './Login.css'
function Login(){
    return(
        <>
        <MyNavbar />
        <div class="login-page">
            <div class="form">
                <form class="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form class="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                </form>
            </div>
        </div>

        </>
    )
}
export default Login