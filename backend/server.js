import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))


const app = express()


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))


// Middleware
app.use(express.json())
app.use(cookieParser())

// Routers
// app.use('/ads', adRouter)
// app.use('/user', userRouter)

// Error Handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found'
  })
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message
  })
})


app.listen(process.env.PORT, () => console.log('app listening on', process.env.PORT))
