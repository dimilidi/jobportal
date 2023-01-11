import Ad from '../models/Ad.js'

/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  let { userId, search } = req.query

  let query = Ad.find()

  if (userId) query = query.where('user').equals(userId)

  // filter ads by search, if it is included in title/description/location/sector,
  if (search) {
    const searchWords = search.split(' ')

    const searchWordsArray = []
    for (const word of searchWords) {
      searchWordsArray.push({ title: { $in: word } })
      searchWordsArray.push({ profession: { $in: word } })
      searchWordsArray.push({ description: { $in: word } })
      searchWordsArray.push({ location: { $in: word } })
    }
    query = query
      .find({ $or: searchWordsArray })
      .collation({ locale: 'en_US', strength: 1 })
  }

  let ads = await query.populate('user', 'name')
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

/** @type {import("express").RequestHandler} */
export const updateAd = async (req, res) => {
  const user = req.user
  const adId = req.params.id
  const ad = await Ad.findById(adId)

  if (ad.user.valueOf() === user._id.valueOf()) {
    for (const key in req.body) {
      ad[key] = req.body[key]
    }
    await ad.save()
    res.status(200).json(ad)
  }
}

/** @type {import("express").RequestHandler} */
export const deleteAd = async(req, res) => {
  const adId = req.params.id
  const ad = await Ad.findById(adId)

  const deletedAd = await Ad.deleteOne(ad)

  if(deletedAd){
    res.status(200).json(deletedAd)
  }else {
    res.status(404).json("Ad: " + ad + " doesn't exist.")
  }

}