import express from 'express'
const router = express.Router()

import { getMovieData, getSingleMovieData } from '../controller/business.js'

router.get('/business', getMovieData)
router.get('/business/:id', getSingleMovieData)

export default router
