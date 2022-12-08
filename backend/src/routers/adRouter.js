import express from 'express'
import 'express-async-errors'


const app = express.Router()

app.get('/', (res, req) => req.send("ads"))
app.get('/ads/:id')
app.post('/')
app.post('/post')


export default app