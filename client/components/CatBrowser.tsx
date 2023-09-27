import { useEffect, useState } from 'react'
import { getCatList, getCatBreeds } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'
interface Breed {
  id: number
  name: string
}

interface RefinedBreed {
  id: number
  breedName: string
}

export default function CatBrowser() {
  const [listCats, setListCats] = useState<Cat[] | null>(null)
  const [catBreeds, setCatBreeds] = useState<RefinedBreed[] | null>(null)
  const [singleBreed, setSingleBreed] = useState<number | null>(null)

  async function fetchCatBreeds() {
    try {
      const allCatBreeds = await getCatBreeds()
      const refinedBreeds = allCatBreeds.map((breed: Breed) => ({
        id: breed.id,
        breedName: breed.name,
      }))
      setCatBreeds(refinedBreeds)
    } catch (error) {
      console.error(error)
    }
  }

  const listOfOptions = catBreeds?.map((breed) => (
    <option value={breed.id} key={breed.id}>
      {breed.breedName}
    </option>
  ))

  useEffect(() => {
    async function fetchCatList() {
      try {
        const newCatList = await getCatList()
        setListCats(newCatList)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCatList()
    fetchCatBreeds()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const selectField = form.querySelector('select')
    if (selectField) {
      const value = parseInt(selectField.value, 10)
      setSingleBreed(value)
    }
  }

  return (
    <div>
      <h5> - </h5>
      <form onSubmit={handleSubmit}>
        <select>{listOfOptions}</select>
        <button type="submit">Choose</button>
      </form>
      <div>
        <h5> - </h5>
      </div>
      {listCats?.map((x) => (
        <div className="catpix" key={x.id}>
          <img
            src={x.url}
            style={{ width: '500px', height: '500px' }}
            alt="Cat being funny"
          />
        </div>
      ))}
    </div>
  )
}
