import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import CatBrowser from './components/CatBrowser.tsx'
import { GetRandomCat } from './components/GetRandomCat.tsx'
import Home from './components/Home.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/cats/random" element={<GetRandomCat />} />
    <Route path="cats/browser" element={<CatBrowser />} />
  </Route>
)

export const router = createBrowserRouter(routes)
