import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    members: {type: Array},
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const Chat = mongoose.model('Chat', Schema)


export default Chat
