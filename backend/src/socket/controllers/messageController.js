import BaseController from './BaseController.js'

export default class MessageController extends BaseController {
  sendMessage = ({text, receiver}) => {
    console.log("value:::::", text, receiver)
    // socket.broadcast.emit('message-from-server', value)  
    this.socket.to(receiver).emit("message-from-server", text)
  }
 
}