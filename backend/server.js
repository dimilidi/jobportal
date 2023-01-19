import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import userRouter from './src/routers/userRouter.js'
import adRouter from './src/routers/adRouter.js'
import http from 'http'
import { Server } from 'socket.io'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()
const server = http.createServer(app)
const io = new Server(server, {cors: {origin: process.env.FRONTEND}})

io.on("connection", socket => {
  console.log(socket.id)

  socket.on("message", (value) => {
    console.log("value:::::", value)
    // socket.broadcast.emit('message-from-server', value)  
    socket.to(value.receiver).emit("message-from-server", value.text)
  })

  
  socket.on("joinRoom", (id) => {
    console.log(id, "has entered the chat")
    socket.join(id)
  })

  // socket.on('typing', (data)=>{
  //   if(data.typing==true)
  //     io.emit('display', data)
  //   else
  //     io.emit('display', data)
  // })


  socket.on('typing-started',()=>{
    socket.broadcast.emit('typing-started-from-server')
    console.log('type')
    // socket.to(value.receiver).emit('getTypingStatus', 'typing!')
  })

  

  // socket.on('disconnect', (socket) => {
  //   console.log('User left')
  // })
})



console.log('\x1b[36m%s\x1b[0m', `CLICK --> ${process.env.FRONTEND}`)

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DB_CONN)
  .then(() => console.log('Datenbank läuft'))
  .catch(() => console.log('Datenbank Verbindung fehlgeschlagen'))

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