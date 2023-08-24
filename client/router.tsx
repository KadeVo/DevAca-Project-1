import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import CatBrowser from './components/CatBrowser.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<CatBrowser />} />
    <Route path="cats/browser" element={<CatBrowser />} />
  </Route>
)

export const router = createBrowserRouter(routes)
