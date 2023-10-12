import {BrowserRouter, Routes, Route, useRoutes} from 'react-router-dom'
import routes from './routes'

function App(){

    let router = useRoutes(routes)

    return router
}
export default App