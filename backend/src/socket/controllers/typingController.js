import BaseController from './BaseController.js'


export default class TypingController extends BaseController {
  
  typingStarted = ()=>{
    this.socket.broadcast.emit('typing-started-from-server')
    // receiver && this.socket.to(receiver).emit("typing-started-from-server")
    console.log('type')

  // socket.to(value.receiver).emit('getTypingStatus', 'typing!')
  }
    
  typingStopped= ()=>{
    this.socket.broadcast.emit('typing-stopped-from-server')
  
  // socket.to(value.receiver).emit('getTypingStatus', 'typing!')
  }
  
}
