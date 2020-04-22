import { Router } from 'express'
import controllers from './countries.controllers'

const router = Router()

// /api/countries
router.route('/').get(controllers.getMany)

// /api/countries/:id
router.route('/:id').get(controllers.getOne)

export default router
