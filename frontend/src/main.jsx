import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/poppins";
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
)
