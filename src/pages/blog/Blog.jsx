import { Link, Route, Routes } from 'react-router-dom'
import MyNavbar from '../../components/navbar/Navbar'
import './Blog.css'
import PhpBlog from '../../components/blogItems/PhpBlog'
import JsBlog from '../../components/blogItems/JsBlog'
import ReactBlog from '../../components/blogItems/ReactBlog'
function Blog(){
    return(
        <div className="blogWrapper">
            <MyNavbar />
            <h1>صفحه مقالات</h1>
            <hr />
            <div className="btn-container">
                <Link className='link-btn'>php blog</Link>
                <Link className='link-btn'>js blog</Link>
                <Link className='link-btn'>react blog</Link>
            </div>

            <hr />

            <Routes>
                <Route path='php' element={<PhpBlog />} />
                <Route path='js' element={<JsBlog />} />
                <Route path='react' element={<ReactBlog />} />
            </Routes>
        </div>
    )
}
export default Blog