import BaseController from './BaseController.js'

export default class MessageController extends BaseController {
  sendMessage = (value) => {
    console.log("value:::::", value)
    // this.socket.broadcast.emit('message-from-server', value)  
    this.socket.to(value.room).emit("message-from-server", value)
    console.log(value.room)
  }
 
}