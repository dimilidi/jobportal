import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/userController.js'


const app = express.Router()

app.get('/', controller.getUser)
app.post('/register', controller.register)
app.post('/login', controller.login)
app.put('/edit-account', controller.updateUser)

export default app