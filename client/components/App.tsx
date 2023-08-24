import { useState, useEffect } from 'react'

import { getWelcome, getCat } from '../apiClient.ts'

import { Cat } from '../../models/welcome.ts'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [cat, setCat] = useState([] as Cat[])

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })

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
      {cat.map((x) => {
        return (
          <>
            <img key={x.id} src={x.url} alt="Cat being funny" />
          </>
        )
      })}
    </>
  )
}

export default App
