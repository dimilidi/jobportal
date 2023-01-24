import BaseController from './BaseController.js'

export default class JoinChatController extends BaseController {
  joinChat = ('join chat', (id) =>{
    this.socket.join(id)
    console.log(id ,  "has entered the chat")


  })
}