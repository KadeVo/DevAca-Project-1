import { useEffect, useState } from 'react'
import { getCatList } from '../apiClient.ts'
import { Cat } from '../../models/models.ts'

export default function CatBrowser() {
  const [listCats, setListCats] = useState([] as Cat[] | null)

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function fetchCatList() {
        const newCatList = await getCatList()
        console.log(newCatList)
        setListCats(newCatList)
      }
      fetchCatList()
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
