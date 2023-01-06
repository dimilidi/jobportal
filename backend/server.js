import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import userRouter from './src/routers/userRouter.js'
import adRouter from './src/routers/adRouter.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
dotenv.config()

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))

const app = express()


app.use(
  cors({
    origin: 'https://jobsy-jobportal.netlify.app',
    credentials: true,
  })
)

// Middleware
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
app.use(express.json())
app.use(cookieParser())

// Routers
app.use('/ads', adRouter)
app.use('/user', userRouter)

// Error Handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: 'not-found',
  })
})

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message,
  })
})

app.listen(process.env.PORT, () =>
  console.log('app listening on', process.env.PORT)
)
