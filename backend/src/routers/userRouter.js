import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/userController.js'
import auth from '../middleware/auth.js'


const app = express.Router()

app.get('/',auth, controller.getUser)
app.post('/register', controller.register)
app.post('/login', controller.login)
app.put('/edit-account',auth, controller.updateUser)

export default app