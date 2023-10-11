import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider dir='rtl'>
      <BrowserRouter>
      
      <App />
      </BrowserRouter>
    </ThemeProvider>
)
