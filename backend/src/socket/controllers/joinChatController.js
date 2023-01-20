import BaseController from './BaseController.js'

export default class JoinChatController extends BaseController {
  joinChat = ('join chat', (room) =>{
    this.socket.join(room)

  })
}