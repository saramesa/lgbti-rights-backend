import dotenv from 'dotenv'

dotenv.config()

export const config = {
  authorizationToken: process.env.AUTHORIZATION_TOKEN,
  dbUrl: 'mongodb://localhost:27017/api-design-test'
}
