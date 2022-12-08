import httpErrors from 'http-errors'
import Ad from '../models/Ad.js'
import User from '../models/User.js'

/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  const ads = Ad.find().populate('user').select('name')
  res.status(200).json(ads)
}

/** @type {import("express").RequestHandler} */
export async function postAd(req, res) {
  // const user = req.user
  const ad = req.ad
  const user = await User.findById('6391ed524f0a32c2282ca4f1')

  const newAd = new Ad({
    ...ad,
    user: user._id,
  })

  await newAd.save()

  res.status(201).json(newAd)
}

/** @type {import("express").RequestHandler} */
export async function getAdById(req, res) {
  const user = req.user
  let query = Ad.find().populate('user').select('name')

  // if user is logged in, show ads with user name and contact data selected in contactvia
  if (user) {
    if (req.body.contactVia.includes('email')) query = query.select('email')
    if (req.body.contactVia.includes('phone')) query = query.select('phone')
  }

  const ads = await query
  res.status(200).json(ads)
}
