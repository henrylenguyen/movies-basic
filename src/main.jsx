import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from "react-router-dom"
import "swiper/scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
