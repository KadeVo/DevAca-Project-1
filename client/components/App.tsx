import { Outlet } from 'react-router'
import { Header } from './Header.tsx'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
