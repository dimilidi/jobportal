import express from 'express'
import 'express-async-errors'
import * as controller from '../controller/userController.js'
import auth from '../middleware/auth.js'
import * as validator from '../lib/validators/userRules.js'

const app = express.Router()

app.get('/', auth, controller.getUser)
app.post('/register', validator.register, controller.register)
app.post('/login', validator.login, controller.login)
app.get('/logout', auth, controller.logout)
app.put('/edit-account', auth, validator.updateUser, controller.updateUser)
app.delete('/delete-account', auth, controller.deleteAccount)

export default app
