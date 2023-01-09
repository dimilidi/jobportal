import { body } from 'express-validator'
import validate from '../../middleware/validate.js'
import  httpErrors from 'http-errors'

export const post = [
  body('category')
    .notEmpty().withMessage('Category is required.'),
  body('title')
    .isString().withMessage('Title should be a text.')
    .notEmpty().withMessage('Title is required.'),
  body('sector')
    .isString().withMessage('Sector should be a text.')
    .notEmpty().withMessage('Sector is required.'),
  body('location')
    .isString().withMessage('City should be a text.')
    .not().isNumeric().withMessage('City should be a text.')
    .notEmpty().withMessage('Location is required.'),
  body('description')
    .isString().withMessage('Description should be a text.')
    .notEmpty().withMessage('Description is required.'),
  body('wage')
    .notEmpty().withMessage('Wage input is required.'),
  body('contactVia')
    .notEmpty().withMessage('Contact option is required.'),
  validate
]
