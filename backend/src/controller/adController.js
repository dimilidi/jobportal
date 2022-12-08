import httpErrors from 'http-errors'
import Ad from '../models/Ad.js'

/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  const ads = await Ad.find()
  res.status(200).json(ads)
}

/** @type {import("express").RequestHandler} */
export function createAd(req, res) {
  const user = req.user
  const ad = req.ad

  const userId = user._id

  const newAd = new Ad({
    ...ad,
    userId,
  })

  throw httpErrors.NotImplemented()
}

/** @type {import("express").RequestHandler} */
export function getAdById(req, res) {
  throw httpErrors.NotImplemented()
}
