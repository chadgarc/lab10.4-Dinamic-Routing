import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Providers from './hooks/Providers.tsx'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Providers>
        <App />
      </Providers>
    </HashRouter>
  </StrictMode>,
)
