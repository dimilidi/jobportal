import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tokens: [String],
  profession: String,
  avatar: String
  // {
  //   public_id: {
  //     type: String
  //   },
  //   secure_url: {
  //     type:String
  //   }
  // }
  ,
  city: String,
  description: String,
  phone: String,
})

userSchema.statics.findByEmail = function (email) {
  return User.findOne().where('email').equals(email)
}

userSchema.statics.findByAuthToken = function (token) {
  const decode = jwt.verify(token, process.env.TOKEN_KEY)
  return User.findById(decode._id).where('tokens').equals(token)
}

// Instance methods
userSchema.methods.generateAuthToken = function () {
  const user = this

  // Go through the existing tokens and if expired, return null
  user.tokens.forEach((token) => {
    const verified = jwt.verify(token, process.env.TOKEN_KEY, (err, verified) =>
      err ? null : verified
    )
    if (!verified) user.tokens.pull(token)
  })

  const token = jwt
    .sign({ _id: user._id }, process.env.TOKEN_KEY, { expiresIn: '2d' })
    .toString()

  user.tokens.push(token)

  return token
}

userSchema.methods.checkPassword = async function (password) {
  const user = this
  return await bcrypt.compare(password, user.password)
}

userSchema.methods.toJSON = function () {
  const user = this
  const result = {
    name: user.name,
    email: user.email,
    _id: user._id,
    profession: user.profession,
    avatar: user.avatar,
    city: user.city,
    description: user.description,
    phone: user.phone,
  }
  return result
}

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }

  next()
})

const User = mongoose.model('User', userSchema, 'users')

export default User
