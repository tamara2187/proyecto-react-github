import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Register } from './pages/Register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Login/>
  </StrictMode>,
)