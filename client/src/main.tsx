import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/layout/App'
import './app/layout/styles.css'
import { ThemeProvider } from './providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
