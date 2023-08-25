import { useEffect, useState } from 'react'
import { getCatList, getCatBreeds } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'

interface breed {
  id: number
  name: string
}

export default function CatBrowser() {
  const [listCats, setListCats] = useState([] as Cat[] | null)
  const [catBreeds, setCatBreeds] = useState([] as Cat[] | null)

  async function fetchCatBreeds() {
    const allCatBreeds = await getCatBreeds()
    console.log(allCatBreeds)
    // if (allCatBreeds.length > 0) {
    const refinedBreeds = allCatBreeds.map((breed: breed) => ({
      id: breed.id,
      breedName: breed.name,
    }))
    console.log(refinedBreeds)
    // }
    setCatBreeds(allCatBreeds)
  }

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
      {listCats?.map((x) => {
        return (
          <>
            <img
              key={x.id}
              src={x.url}
              style={{ width: '500px', height: '500px' }}
              alt="Cat being funny"
            />
          </>
        )
      })}
    </>
  )
}
