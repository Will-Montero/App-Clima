import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppClima } from './AppClima'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClima></AppClima>
  </StrictMode>,
)
