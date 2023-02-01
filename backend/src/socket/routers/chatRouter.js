import express from 'express'
import { createChat, deleteChat, findChat, userChats } from '../controllers/chatController.js'
import auth from '../../middleware/auth.js'


const app = express.Router()


app.post('/',auth,  createChat)
app.get('/:userId', userChats)
app.get('/find/:firstId/:secondId', findChat)
app.delete('/:id', auth, deleteChat)


export default app