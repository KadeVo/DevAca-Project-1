import { useEffect, useState } from 'react'
import { getCat, likeCatPic } from '../apiClient.ts' // Remove ".ts" extensions
import { Cat } from '../../models/models.ts' // Remove ".ts" extensions
import { Link } from 'react-router-dom'
// import { GetRandomCat } from './GetRandomCat.tsx'

// function fetchCat() {
//   const [cat, setCat] = useState([] as Cat[] | null)
//   function fetchCats() {
//     const newCat = getCat()
//     console.log(newCat)
//     setCat(newCat)
//   }
//   fetchCats()
// }

function Header() {
  const [cat, setCat] = useState([] as Cat[] | null)

  async function fetchCats() {
    const newCat = await getCat()
    console.log(newCat)
    setCat(newCat)
  }

  return (
    <>
      <div className="header">
        <div className="logoContainer">
          <img src="/images/OnlyCatsFinal.png" alt="Logo" className="logo" />
        </div>
      </div>
      <div className="navContainer">
        {/* <a href="index.html" className="onlyButton">
          Back to Home
        </a> */}
        <Link to="/cats/random">
          {' '}
          <button
            type="button"
            className="onlyButton randomButton"
            onClick={fetchCats}
          >
            Random Cat
          </button>

        </Link>
        <button type="button" className="onlyButton browseButton">
          Browse Felines
        </button>
        <h5> - </h5>

      </div>
    </>
  )
}

export default Header
