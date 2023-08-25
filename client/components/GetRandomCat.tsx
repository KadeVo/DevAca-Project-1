import { useEffect, useState } from 'react'
import { getCat, likeCatPic } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'
import { Link } from 'react-router-dom'



export function GetRandomCat() {
  const [cat, setCat] = useState([] as Cat[] | null)
  async function fetchCats() {
    const newCat = await getCat()
    console.log(newCat)
    setCat(newCat)
  }

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations

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
            <div className="buttonContainer" >
              <Link to="/"> <button type="button" className="onlyButton randomButton" onClick={fetchCats}>
                Back to home
              </button>
              </Link>
              <button className="likeButton" onClick={handleLikeClick} value={x.id}>
                Like
              </button>
              <button className="dislikeButton" onClick={handleDislikeClick} value={x.id}>
                Dislike
              </button>
            </div>
          </>
        )
      })}
    </>
  )
}
