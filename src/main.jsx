import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LoadingSkeleton from './components/LoadingSkeleton.jsx'

// Lazy load components for code splitting
const App = lazy(() => import('./App.jsx'))
const MenuItemDetail = lazy(() => import('./components/MenuItemDetail.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingSkeleton type="detail" />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu/:itemId" element={<MenuItemDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
