import Ad from '../models/Ad.js'

/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  let { userId, search } = req.query
  let query = Ad.find()

  if (userId) query = query.where('user').equals(userId)

  // filter ads by search, if it is included in title/description/location/sector,
  if (search) {
    query = query.find({
      $or: [
        { title: { $in: search } },
        { description: { $in: search } },
        { location: { $in: search } },
        { sector: { $in: search } },
      ],
    })
  }

  const ads = await query.populate('user', 'name')
  console.log(ads)
  res.status(200).json(ads)
}

/** @type {import("express").RequestHandler} */
export async function postAd(req, res) {
  const user = req.user
  const ad = req.body

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
  const adId = req.params.id

  // if user is NOT logged in, populate only name of ad-creator
  let ad = await Ad.findById(adId).populate('user', 'name')

  // if user is logged in, contact data selected in contactvia
  let itemToPopulate = 'name'
  if (user) {
    for (const item of ad.contactVia) {
      itemToPopulate += ` ${item}`
    }
    ad = await Ad.findById(adId).populate('user', itemToPopulate)
  }

  res.status(200).json(ad)
}
