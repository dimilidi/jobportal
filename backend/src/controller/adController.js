import Ad from '../models/Ad.js'
import User from '../models/User.js'


/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  const ads = await Ad.find().populate('user', 'name')
  res.status(200).json(ads)
}


/** @type {import("express").RequestHandler} */
export async function postAd(req, res) {
  // const user = req.user
  const ad = req.body
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
  // const user = req.user
  // imitate login-user
  const user = await User.findById('6391ed524f0a32c2282ca4d1')

  const adId = req.params.id

  // if user is NOT logged in, populate only name of ad-creator
  let itemToPopulate = 'name'

  // if user is logged in, contact data selected in contactvia
  if (user) {
    for (const item of req.body.contactVia) {
      itemToPopulate += ` ${item}`
    }
  }

  const ad = await Ad.findById(adId).populate('user', itemToPopulate)
  res.status(200).json(ad)
}
