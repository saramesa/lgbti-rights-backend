import { Router } from 'express'
import controllers from './links.controller'

const router = Router()

// /api/links
router.route('/').get(controllers.getMany)

export default router
