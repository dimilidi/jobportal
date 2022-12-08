import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['offering', 'searching'] },
  description: { type: String, required: true },
  location: { type: String, required: true },
  wage: { type: Number, required: true },
  contactVia: { type: [String], enum: ['email', 'phone'] },
  timestamps: true,
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
})

const Ad = mongoose.model('Ad', Schema)

export default Ad
