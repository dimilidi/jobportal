import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    chatId: {type: String},
    senderId: {type: String},
    text: {type: String}
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model('Message', Schema)


export default Message
