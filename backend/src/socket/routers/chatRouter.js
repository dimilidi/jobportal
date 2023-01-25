import express from 'express'
import { createChat, findChat, userChats } from '../controllers/chatController.js'
import auth from '../../middleware/auth.js'


const app = express.Router()


app.post('/',auth,  createChat)
app.get('/:userId', userChats)
app.get('/find/:firstId/:secondId', findChat)

export default app