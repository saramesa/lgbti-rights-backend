import mongoose from 'mongoose'

const linksSchema = new mongoose.Schema(
  {
    andrea: String,
    sara: String
  },
  { timestamps: true }
)

linksSchema.index({ links: 1, name: 1 }, { unique: true })

export const Links = mongoose.model('links', linksSchema, 'links')
