import express from 'express'
import 'express-async-errors'


const app = express.Router()

app.get('/', (res, req) => req.send("hi"))
app.post('/register')
app.post('/login')
app.put('/edit-account')

export default app