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
    .isEmail()
    .withMessage('email not valid')
    .custom(async (value) => {
      const user = await User.findByEmail(value)
      if (user) throw new Error('This email already exists')
      return true
    }),
  body('password')
    .isStrongPassword()
    .withMessage(
      'Password must include at least one special character, one uppercase and lowercase letter and a number'
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
    .isString()
    .not()
    .isNumeric()
    .optional()
    .withMessage('Name must consist only of characters'),
  body('profession').isString().optional(),
  body('avatar').isString().optional().withMessage('Invalid format'),
  body('city').isString().optional(),
  body('description')
    .isString()
    .isLength({ min: 10 })
    .optional()
    .withMessage('Description should have at least 10 characters'),
  body('phone').isString().optional(),
  validate,
]
