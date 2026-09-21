import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import LoginRegistro from './componentes/zonaCliente/registro/LoginRegistro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginRegistro />
  </StrictMode>,
)
