import { body } from 'express-validator'
import User from '../../models/User.js'
import validate from '../../middleware/validate.js'

export const register = [
  body('name')
    .isString()
    .optional()
    .withMessage("Name must consist only of characters"),
  body('password')
    .isStrongPassword()
    .withMessage("Password must include at least one special character, one uppercase letter and a number"),
  body('email')
    .isEmail()
    .withMessage('email not valid')
    .custom(async (value) => {
      const user = await User.findByEmail(value)
      if(user) throw new Error('This email already exists')
      return true
    }),
  validate
]

export const login = [
  body('password')
    .isString(),
  body('email')
    .isEmail()
    .withMessage('Email not valid'),
  validate 
]


export const updateUser = [
  body('password') //?
    .isString()
    .optional(),
  body('email') //?
    .isEmail()
    .optional()
    .withMessage('Email not valid'),
  body('name')
    .isString()
    .not().isNumeric()
    .optional()
    .withMessage('Name must consist only of characters'),
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