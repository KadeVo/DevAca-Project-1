import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

// GET /api/v1/welcome/
router.post('/votes', async (req, res) => {
  const objToPost = req.body
  console.log(process.env.x_api_key)
  if (process.env.x_api_key) {
    const response = await request
      .post('https://api.thecatapi.com/v1/votes')
      .send(objToPost)
      .set('x-api-key', process.env.x_api_key)
    res.json(response.body)
  } else {
    res.sendStatus(500)
  }
})

export default router
