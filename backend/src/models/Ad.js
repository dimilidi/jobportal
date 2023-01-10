import mongoose from 'mongoose'

const Schema = mongoose.Schema(
  {
    title: { type: String, required: [true] },
    category: { type: String, enum: ['offering', 'searching'] },
    description: { type: String, required: true },
    location: { type: String, required: true },
    wage: { type: Number, required: true },
    sector: { type: String, required: true },
    contactVia: {
      type: [String],
      required: true,
    },
    createdAt: Date,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const Ad = mongoose.model('Ad', Schema)

export default Ad
