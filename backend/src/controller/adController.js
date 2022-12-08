import Ad from '../models/Ad.js'


/** @type {import("express").RequestHandler} */
export async function getAds(req, res) {
  const ads = await Ad.find()
  res.status(200).json(ads)
}


/** @type {import("express").RequestHandler} */
export async function createAd(req, res) {
  const user = req.user
  const ad = new Ad(req.body)
  const userId = user._id
  ad.user = userId
  await ad.save()
  
  res.status(201).send(ad)
}


/** @type {import("express").RequestHandler} */
export async function getAdById(req, res) {
  const user = req.user
  const id = req.params.id
  let query =  Ad.findById(id)
  
  if(!user){
    query = query.populate('user', '-email -_id -phone')
  } else {
    query = query.populate('user') 
  }

  const ad = await query
  res.status(200).send(ad)
}
