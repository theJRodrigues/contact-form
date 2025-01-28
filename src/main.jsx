import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormContactUs } from './pages/form-contact-us/FormContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormContactUs />

  <footer className="fixed bottom-0 p-2 bg-black w-full text-center text-white font-bold">
    <p>Challenge by <a target='_blank' className='text-amber-400 hover:text-amber-300' href="https://www.frontendmentor.io/profile/theJRodrigues">Frontend Mentor</a>. </p> 
    <p>Coded by <a target='_blank' className='text-amber-400 hover:text-amber-300' href="https://github.com/theJRodrigues">Jean Gabriel Rodrigues</a>.</p>
    
  </footer>
  </StrictMode>,
)
