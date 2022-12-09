import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/adController.js'
import auth from '../middleware/auth.js'
import {softAuth} from '../middleware/auth.js'

const app = express.Router()

app.get('/', controller.getAds)
app.get('/:id', controller.getAdById)
app.post('/post', controller.postAd)

export default app
