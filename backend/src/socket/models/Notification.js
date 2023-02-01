import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true},
    sender: { type: mongoose.Types.ObjectId, ref: 'User' },
    content: { type: String },
    is_read: {type: Boolean}
  },
  {
    timestamps: true,
  }
)

const Notification = mongoose.model('Notification', Schema)


export default Notification
