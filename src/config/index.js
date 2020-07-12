import { merge } from 'lodash'

const env = process.env.NODE_ENV

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3000
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break
  default:
    envConfig = require('./dev').config
}

export default merge(baseConfig, envConfig)
