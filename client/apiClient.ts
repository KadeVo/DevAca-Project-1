import request from 'superagent'

const serverURL = 'https://api.thecatapi.com/v1/images/search'

export async function getCat() {
  const cat = await request.get(serverURL)
  return cat.body
}

export async function likeCatPic(objToPost: object) {
  const urlForPost = '/api/v1/cats/votes'
  const response = await request.post(urlForPost).send(objToPost)
  console.log(response)
  return response.body
}

export async function dislikeCatPic(objToPost: object) {
  const urlForPost = '/api/v1/cats/votes'
  const response = await request.post(urlForPost).send(objToPost)
  console.log(response.body)
  return response.body
}
