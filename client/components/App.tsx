import { Outlet } from 'react-router'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Header />
   
      <div>
        <Outlet />
      </div>
      </div>
    </>
  )
}

export default App
