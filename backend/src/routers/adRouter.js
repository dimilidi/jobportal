import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/adController.js'
import auth from '../middleware/auth.js'
import {softAuth} from '../middleware/auth.js'

const app = express.Router()

app.get('/', controller.getAds)
app.get('/:id', softAuth,  controller.getAdById) // AUTH?
app.post('/post', auth, controller.createAd)

export default app
