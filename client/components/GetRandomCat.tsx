import { useEffect, useState } from 'react'
import { getCat, likeCatPic } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'

export function GetRandomCat() {
  const [cat, setCat] = useState([] as Cat[] | null)

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

  async function handleLikeClick(
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    e.preventDefault()
    const objToPost = {
      image_id: e.currentTarget.value,
      value: 1,
    }
    try {
      const response = await likeCatPic(objToPost)
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  async function handleDislikeClick(
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    e.preventDefault()
    const objToPost = {
      image_id: e.currentTarget.value,
      value: -1,
    }
    try {
      const response = await likeCatPic(objToPost)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {cat?.map((x) => {
        return (
          <>
            <img
              key={x.id}
              src={x.url}
              style={{ width: '500px', height: '500px' }}
              alt="Cat being funny"
            />
            <button onClick={handleLikeClick} value={x.id}>
              Like
            </button>
            <button onClick={handleDislikeClick} value={x.id}>
              Dislike
            </button>
          </>
        )
      })}
    </>
  )
}
