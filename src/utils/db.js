import mongoose from 'mongoose'

export const connect = (
  url = process.env.DB_URL,
  opts = { useNewUrlParser: true, useUnifiedTopology: true }
) => {
  mongoose.set('useCreateIndex', true)
  mongoose.connect(
    url,
    { ...opts }
  )
}
