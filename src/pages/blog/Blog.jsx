import { Route, Routes } from 'react-router-dom'
import MyNavbar from '../../components/navbar/Navbar'
import './Blog.css'
function Blog(){
    return(
        <div className="blogWrapper">
            <MyNavbar />
            <h1>صفحه مقالات</h1>
            <hr />

            <Routes>
                <Route path='php' element={<h1>php blog</h1>} />
                <Route path='js' element={<h1>javascript blog</h1>} />
                <Route path='react' element={<h1>react blog</h1>} />
            </Routes>
        </div>
    )
}
export default Blog