import httpErrors from 'http-errors'
import User from '../models/User.js'




/** @type {import("express").RequestHandler} */
export function getUser (req, res) {
  const user = req.user
  res.status(200).send(user)
}



/** @type {import("express").RequestHandler} */
export async function register (req, res) {
  const user = new User(req.body)
  const token = user.generateAuthToken()
  console.log(token)

    
  await user.save()

  // Cookie 
  const cookieOptions = {
    httpOnly: true,     
    secure: true,       
    sameSite: 'lax'     
  }

  res
    .cookie('auth-token', token, cookieOptions)
    .status(201)
    .send(user)
}


/** @type {import("express").RequestHandler} */
export async function login (req, res) {
  const {email, password} = req.body

  const user = await User.findByEmail(email)
  
  if(!user) throw httpErrors.Unauthorized()
  
  const passwordCheck = await user.checkPassword(password)
  
  if(!passwordCheck) throw httpErrors.Unauthorized()
  
  const token = user.generateAuthToken()

  
  await user.save()
  
  // Cookie 
  const cookieOptions = {
    httpOnly: true,     
    secure: true,       
    sameSite: 'lax'     
  }
  
  res
    .cookie('auth-token', token, cookieOptions)
    .status(200)
    .send(user)
}



/** @type {import("express").RequestHandler} */
export async function updateUser (req, res) {
  const user = req.user

  for(const key in req.body) {
    user[key] =  req.body[key]
  }
  await user.save()
  
  res.status(200).send(user)
}


/** @type {import("express").RequestHandler} */
export const logout = async (req, res) => {
  const user = req.user
  const token = req.cookies["auth-token"]

  user.tokens.pull(token)
  await user.save()
  
  res
    .clearCookie("token")
    .status(204).json()
}