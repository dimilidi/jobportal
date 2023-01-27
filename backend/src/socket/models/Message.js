import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    // chatId: {type: String},
    // senderId: {type: String},
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true},
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true},
    text: {type: String}
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model('Message', Schema)


export default Message
