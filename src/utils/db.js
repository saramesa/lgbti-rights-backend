import mongoose from 'mongoose'
import options from '../config'

export const connect = (url = options.dbUrl, opts = {}) => {
  mongoose.set('useCreateIndex', true)
  mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}