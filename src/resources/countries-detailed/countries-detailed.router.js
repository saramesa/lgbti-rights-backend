import { Router } from 'express'
import controllers from './countries-detailed.controllers'

const router = Router()

// /api/countries-detailed
router.route('/').get(controllers.getMany)

// /api/countries-detailed/:id
router.route('/:id').get(controllers.getOne)

export default router
