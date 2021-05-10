import { Router } from 'express'
import PetController from './petsController'

const router = Router()
const controller = new PetController()

router.get('/pets', (req, res, next) => controller.findAll(req, res, next))
