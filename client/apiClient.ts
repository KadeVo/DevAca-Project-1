import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getCat() {
  const cat = await request.get('https://api.thecatapi.com/v1/images/search')
  const catId = cat.body[0].id
  const db = await request.get(`https://api.thecatapi.com/v1/images/${catId}`)
  return db.body
}
