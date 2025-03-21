import { createRoot } from 'react-dom/client'
import { App } from './routes/AppRouter.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
