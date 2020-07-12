import dotenv from 'dotenv'

dotenv.config()

export const config = {
  authorizationToken: process.env.AUTHORIZATION_TOKEN,
  dbUrl:
    'mongodb+srv://datcoders:fyTMM6DRVQ7EAkgv@datcoders-humld.mongodb.net/lgbti-rights?retryWrites=true&w=majority'
}
