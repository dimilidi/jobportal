import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tokens: [String],
  avatar: String,
  city: String,
  description: String,
  phone: Number,
})

const User = mongoose.model('User', userSchema, 'users')

export default User
