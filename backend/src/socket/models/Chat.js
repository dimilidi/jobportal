import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    members: {type: Array}
  },
  {
    timestamps: true,
  }
)

const Chat = mongoose.model('Chat', Schema)


export default Chat
