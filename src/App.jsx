import {BrowserRouter, Routes, Route, useRoutes} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import PhpBlog from './components/blogItems/PhpBlog'
import JsBlog from './components/blogItems/JsBlog'
import ReactBlog from './components/blogItems/ReactBlog'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'

function App(){

    let routes = useRoutes([
        { path : '/', element : <Home />},
        { path : '/about', element : <About />},
        { path : '/blog/*', element : <Blog />, children : [
            { path : 'php', element : <PhpBlog />},
            { path : 'js', element : <JsBlog />},
            { path : 'react', element : <ReactBlog />}
        ]},
        { path : '/login' , element : <Login />},
        { path : '/panel' , element : <Panel />},
        { path : '/course/:courseId' , element : <Course />},
    ])

    return routes
}
export default App