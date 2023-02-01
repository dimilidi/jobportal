import BaseController from './BaseController.js'
import Message from '../models/Message.js'

export default class MessageController extends BaseController {
  sendMessage = (value) => {
    console.log("value:::::", value)
    // this.socket.broadcast.emit('message-from-server', value)  
    this.socket.to(value.room).emit("message-from-server", value)
    console.log(value.room)
  }
 
}


// /** @type {import("express").RequestHandler} */
export const addMessage = async(req, res) => {
  const {chatId, senderId, text, is_read} = req.body

  const newMessage = new Message({
    chatId, 
    senderId, 
    text,
    is_read
  })

  const message = await newMessage.save()
  res.status(201).json(message)
}


// /** @type {import("express").RequestHandler} */
export const getMessages = async(req, res) => {
  const {chatId} = req.params

  const message = await Message.find({chatId})
  res.status(200).json(message)
}


