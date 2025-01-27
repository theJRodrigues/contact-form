import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormContactUs } from './pages/form-contact-us/FormContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormContactUs />
    
  </StrictMode>,
)
