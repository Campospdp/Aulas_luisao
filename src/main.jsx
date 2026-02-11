import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { App } from './App.jsx'
//import App from './App.jsx'
=======
import './index.css'
import App from './App.jsx'
>>>>>>> f1ca418 (login dark mode concluído)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
