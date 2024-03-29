import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/adController.js'
import auth from '../middleware/auth.js'
import { softAuth } from '../middleware/auth.js'
import * as validator from '../lib/validators/adRules.js'

const app = express.Router()

app.get('/', controller.getAds)
app.get('/:id', softAuth, controller.getAdById)
app.get('/:id/increment-view', softAuth, controller.incrementViews)
app.put('/:id', auth, validator.post, controller.updateAd)
app.post('/post', auth, validator.post, controller.postAd)
app.delete('/:id', auth, controller.deleteAd)

export default app
