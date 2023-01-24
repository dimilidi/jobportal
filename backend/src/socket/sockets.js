import TypingController from "./controllers/typingController.js"
// import RoomController from "./controllers/roomController.js"
import MessageController from "./controllers/messageController.js"
import JoinChatController from "./controllers/joinChatController.js"

const sockets = (socket) => {
  // const typingController = new TypingController(socket)
  // // const roomController = new RoomController(socket)
  // const messageController = new MessageController(socket)
  // const joinChatController = new JoinChatController(socket)
  
  // socket.on("message", messageController.sendMessage )    
  // // socket.on("joinRoom", roomController.joinRoom)
  // socket.on('typing-started',typingController.typingStarted)
  // socket.on('typing-stopped',typingController.typingStopped)
  // socket.on('join chat', joinChatController.joinChat)

  // socket.on('disconnect', (id) => {
   
  //   console.log('User left', id)
  // })
}

export default sockets