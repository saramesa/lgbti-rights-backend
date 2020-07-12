import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
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

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation))
app.use('/api/user', userRouter)
app.use('/api/countries', countriesRouter)
app.use('/api/countries-detailed', countriesDetailedRouter)
app.use('/api/links', linksRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
