import { body } from 'express-validator'
import User from '../../models/User.js'
import validate from '../../middleware/validate.js'

export const register = [
  body('name')
    .isString()
    .not()
    .isNumeric()
    .withMessage('Name must consist only of characters')
    .notEmpty()
    .withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email not valid')
    .custom(async (value) => {
      const user = await User.findByEmail(value)
      if (user) throw new Error('This email already exists')
      return true
    }),
  body('password')
    .isStrongPassword()
    .withMessage(
      'Password must include at least one special character, one uppercase and lowercase letter and a number.'
    ),
  validate,
]

export const login = [
  body('password').isString(),
  body('email').isEmail().withMessage('Email not valid'),
  validate,
]

export const editAccount = [
  body('password') //?
    .isString()
    .optional(),
  body('newPassword').isStrongPassword().optional(),
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must consist only of characters')
    .not().isNumeric().withMessage('Name must consist only of characters'),
  body('profession')
    .isString()
    .not().isNumeric().withMessage('Profession must consist only of characters')
    .optional(),
  body('avatar').isString().optional().withMessage('Invalid format'),
  body('file').isString().optional().withMessage('Invalid file format'),
  body('phone')
    .isNumeric().withMessage('Phone must consist only of numbers')
    .optional(),
  body('city')
    .isString()
    .optional()
    .not().isNumeric().withMessage('City must consist only of characters'),
  body('description')
    .isString()
    .isLength({ min: 10 })
    .optional()
    .withMessage('Description should have at least 10 characters'),
  validate,
]
