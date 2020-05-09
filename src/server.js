import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import userRouter from './resources/user/user.router'
import countriesRouter from './resources/countries/countries.router'
import countriesDetailedRouter from './resources/countries-detailed/countries-detailed.router'
import linksRouter from './resources/links/links.router'
import swaggerUi from 'swagger-ui-express'
import apiDocumentation from './apiDocumentation'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.post('/signup', signup)
app.post('/signin', signin)

// app.use('/api', protect)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation))
app.use('/api/user', userRouter)
app.use('/api/countries', countriesRouter)
app.use('/api/countries-detailed', countriesDetailedRouter)
app.use('/api/links', linksRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
