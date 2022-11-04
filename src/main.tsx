import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages'
import './index.css'
import Navbar from './components/navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <Navbar />
      <Home />
    </>
  </React.StrictMode>
)
