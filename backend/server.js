import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import userRouter from './src/routers/userRouter.js'
import adRouter from './src/routers/adRouter.js'
import chatRouter from './src/socket/routers/chatRouter.js'
import messageRouter from './src/socket/routers/messageRouter.js'
import http from 'http'
import { Server } from 'socket.io'
import sockets from './src/socket/sockets.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Server
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  pingTimeout: 600000, // closing connection after certain time
  cors: {origin: process.env.FRONTEND}})

// Socket Connection
io.on("connection", sockets )


console.log('\x1b[36m%s\x1b[0m', `CLICK --> ${process.env.FRONTEND}`)

// DB Connection
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))


// Cors 
app.use(
  cors({
    origin: process.env.FRONTEND,
    credentials: true,
  })
)

// Middleware
app.use(express.json())
app.use(cookieParser())

// Routers
app.use('/ads', adRouter)
app.use('/user', userRouter)
app.use('/chat', chatRouter)
app.use('/message', messageRouter)

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

server.listen(process.env.PORT, () =>
  console.log('app listening on', process.env.PORT)
)