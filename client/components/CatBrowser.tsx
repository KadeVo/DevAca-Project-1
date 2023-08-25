import { useEffect, useState } from 'react'
import { getCatList, getCatBreeds } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'

interface breed {
  id: number
  name: string
}

interface breed1 {
  id: number
  breedName: string
}

export default function CatBrowser() {
  const [listCats, setListCats] = useState([] as Cat[] | null)
  const [catBreeds, setCatBreeds] = useState([] as breed1[] | null)

  async function fetchCatBreeds() {
    const allCatBreeds = await getCatBreeds()
    const refinedBreeds = allCatBreeds.map((breed: breed) => ({
      id: breed.id,
      breedName: breed.name,
    }))
    setCatBreeds(refinedBreeds)
  }

  const listOfOptions = catBreeds?.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.breedName}
    </option>
  ))

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function fetchCatList() {
        const newCatList = await getCatList()
        setListCats(newCatList)
      }
      fetchCatList()

      fetchCatBreeds()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <h5> - </h5>
      <form>
        <select>{listOfOptions}</select>
      </form>
      <div>
        <h5> - </h5>
      </div>
      {listCats?.map((x) => {
        return (
          <div className="catpix">
            <img
              key={x.id}
              src={x.url}
              style={{ width: '500px', height: '500px' }}
              alt="Cat being funny"
            />
          </div>
        )
      })}
    </>
  )
}
