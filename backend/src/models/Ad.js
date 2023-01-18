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
    views: {type: Number, default: 0},
    createdAt: Date,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

// index text fields
Schema.index({
  title: 'text',
  description: 'text',
  location: 'text',
  sector: 'text',
})
const Ad = mongoose.model('Ad', Schema)
// run create index
Ad.createIndexes()

export default Ad
