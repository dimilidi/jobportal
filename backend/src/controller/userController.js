import httpErrors from 'http-errors'
import User from '../models/User.js'




/** @type {import("express").RequestHandler} */
export function getUser (req, res) {
  res.status(200).send(req.user)
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
  // update only with AUTH possible
  const user = req.user

// User Test
// const user = await User.findById("6391f4d69085627f552b27f5")

  for(const key in req.body) {
    user[key] =  req.body[key]
  }
  await user.save()
  
  res.status(200).send(user)
}