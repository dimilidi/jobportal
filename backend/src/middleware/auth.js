import User from '../models/User.js'
import httpErrors from 'http-errors'

export default async function auth(req, res, next) {
  const token = req.cookies['auth-token']

  if (!token) throw httpErrors.Unauthorized('Not authorized to access')

  const user = await User.findByAuthToken(token)

  if (!user) throw httpErrors.Unauthorized('You shall not pass!')

  req.user = user

  next()
}

export async function softAuth(req, res, next) {
  const token = req.cookies['auth-token']
  const user = await User.findByAuthToken(token)
  req.user = user

  next()
}
