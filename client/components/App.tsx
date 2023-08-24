import { GetRandomCat } from './GetRandomCat.tsx'
import React from 'react';
import Header from './Header.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <GetRandomCat />
    </>
  )
}

export default App
