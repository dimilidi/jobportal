import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/adController.js'

const app = express.Router()

app.get('/', controller.getAds)
app.get('/:id', controller.getAdById)
app.post('/post', controller.createAd)

export default app
