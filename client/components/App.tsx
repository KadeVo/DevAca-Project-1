import { useState, useEffect } from 'react'

import { getWelcome, getCat } from '../apiClient.ts'

import { Cat, CatDetails } from '../../models/welcome.ts'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [cat, setCat] = useState(null as Cat | null)

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function fetchCats() {
        const newCat = await getCat()
        console.log(newCat)
        setCat(newCat)
      }
      fetchCats()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <h1>{welcomeStatement}</h1>
      {/* {cat.map((x) => {
        return (
          <>
            <img key={x.id} src={x.url} alt="Cat being funny" />
          </>
        )
      })} */}
      {cat !== null && (
        <div>
          <img key={cat.id} src={cat.url} alt="Cat being funny" />
        </div>
      )}
    </>
  )
}

export default App
