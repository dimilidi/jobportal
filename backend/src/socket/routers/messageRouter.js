import express from 'express'
import { addMessage, getMessages } from '../controllers/messageController.js'

const app = express.Router()

app.post('/', addMessage)
app.get('/:chatId', getMessages)

export default app
