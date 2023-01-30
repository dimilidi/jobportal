import TypingController from "./controllers/typingController.js"
// import RoomController from "./controllers/roomController.js"
import MessageController from "./controllers/messageController.js"
import JoinChatController from "./controllers/joinChatController.js"


let activeUsers = []

const sockets = (socket) => {

  console.log('socket', socket.id)
  console.log('active', activeUsers)
  const typingController = new TypingController(socket)
  // const roomController = new RoomController(socket)
  const messageController = new MessageController(socket)
  const joinChatController = new JoinChatController(socket)


  //add new User 
  socket.on('new-user-add', (newUserId) => {
    // if user is not added previously
    // if(!activeUsers.some((user)=> user.userId === newUserId)){
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id
      })
    // }
    console.log('Connected Users', activeUsers)
    socket.emit('get-users', activeUsers) //io?
  })


  // send message
  socket.on('send-message', (data)=> {
    const {receiverId} = data
    const user = activeUsers.find((user) => user.userId === receiverId)
    
    if(user) {
      socket.to(user.socketId).emit('receive-message', data)
    }
    console.log('From socket to:', receiverId)
    console.log('Data',data)
  })
  




  // socket.on("message", messageController.sendMessage )    
  // // socket.on("joinRoom", roomController.joinRoom)
  // socket.on('typing-started',typingController.typingStarted)
  // socket.on('typing-stopped',typingController.typingStopped)
  // socket.on('join chat', joinChatController.joinChat)

  // socket.on('disconnect', () => {
  //   activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
  //   console.log('User left', activeUsers)
  //   socket.emit('get-users', activeUsers) 
  
  // })
}

export default sockets