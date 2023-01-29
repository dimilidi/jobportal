import Ad from '../models/Ad.js'
import mongoose from 'mongoose'

// GET ADS
/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  let { userId, search, category, page = 0} = req.query
  const page_size = 3
  let countDoc =  Ad.countDocuments({})
  let query = Ad.find({})

  if (userId) {
    query = query.where('user').equals(userId)
    // count docs created by user
    countDoc =  countDoc.where('user').equals(userId)
  }


  if (category) {
    if (category !== 'all') {
      query = query.where('category').equals(category)
      // count docs found by choosing a category
      countDoc =  countDoc.where('category').equals(category)
    }
  }

  // Filter ads by search, if it is included in title/description/location/sector,
  if (search) {
    query = query  
    // search for the input words and give score by the number of matching words
      .find({ $text: { $search: search } }, { score: { $meta: 'textScore' } })
      .clone()
    // count docs found by search
    countDoc = countDoc.count(query)
    // sort search
    query = query.sort({ score: { $meta: 'textScore' } })
  }

  // Pagination
  if (page) {
    query = query
      .find({})
      .skip(parseInt(page) * page_size)
      .limit(page_size)
  }

  // Sort ads by update date (descending order)
  query = query.sort({ updatedAt: -1 })

  query.populate('user', 'name email avatar').clone()
  
  const [count, ads] = await Promise.all([countDoc, query])
  let pageCount = count / page_size

  res.status(200).json({pagination:{count, pageCount},ads})
}



// POST AD
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


// GET AD BY ID
/** @type {import("express").RequestHandler} */
export async function getAdById(req, res) {
  const user = req.user
  const adId = req.params.id

  // if user is NOT logged in, populate only name of ad-creator
  let ad = await Ad.findById(adId).populate('user', 'name, avatar views')


  // if user is logged in, contact data selected in contactvia
  let itemToPopulate = 'name avatar views'
  if (user) {
    for (const item of ad.contactVia) {
      itemToPopulate += ` ${item}`
    }
    ad = await Ad.findById(adId).populate('user', itemToPopulate)
  }

  res.status(200).json(ad)
}


//INCREMENT VIEWS
/** @type {import("express").RequestHandler} */
export async function incrementViews(req, res) {
  const user = req.user
  const adId = req.params.id

  const resultUpdate = await Ad.findByIdAndUpdate(adId, {
    $inc: {views: 1},
  })
  console.log(resultUpdate)


  res.status(200).json(resultUpdate)
}



// UPDATE AD
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


// DELETE AD
/** @type {import("express").RequestHandler} */
export const deleteAd = async (req, res) => {
  const adId = req.params.id
  const ad = await Ad.findById(adId)

  const deletedAd = await Ad.deleteOne(ad)

  if (deletedAd) {
    res.status(200).json(deletedAd)
  } else {
    res.status(404).json('Ad: ' + ad + " doesn't exist.")
  }
}
