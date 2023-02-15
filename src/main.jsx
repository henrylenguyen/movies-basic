import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {BrowserRouter} from "react-router-dom"
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
