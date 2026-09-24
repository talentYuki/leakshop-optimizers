import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Guides from './Guides'
import Order from './Order'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)