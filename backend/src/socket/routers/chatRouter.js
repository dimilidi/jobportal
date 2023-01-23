import express from 'express'
import { createChat, findChat, userChats } from '../controllers/chatController.js'

const app = express.Router()


app.post('/', createChat)
app.get('/:userId', userChats)
app.get('/find/:firstId/:secondId', findChat)

export default app