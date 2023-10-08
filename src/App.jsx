import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Panel from './pages/panel/Panel'
import Login from './pages/login/Login'
import Course from './pages/course/Course'
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/panel' element={<Panel />} />
                <Route path='/login' element={<Login />} />
                <Route path='/course/:courseId' element={<Course />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App