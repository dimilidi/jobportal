import { body } from 'express-validator'
import validate from '../../middleware/validate.js'

export const ad = [
  body('title').isString().notEmpty(),
  body('category').isString().notEmpty(),
  body('description').isString().notEmpty(),
  body('location').isString().notEmpty(),
  body('wage').isNumeric(),
  body('contactVia').isString().notEmpty(),
  validate,
]
