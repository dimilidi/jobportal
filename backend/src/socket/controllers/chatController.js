import Chat from '../models/Chat.js'



/** @type {import("express").RequestHandler} */
export const createChat = async(req, res) => {
  const newChat = new Chat({
    members: [req.body.senderId, req.body.receiverId]
  })

  const chat = await newChat.save()
  res.status(201).json(chat)
}



/** @type {import("express").RequestHandler} */
export const userChats = async(req, res) => {
  const chats = await Chat.find({
    members: {$in: [req.params.userId]}
  })
  res.status(200).json(chats)
}

/** @type {import("express").RequestHandler} */
export const findChat = async(req, res) => {
  const chat = await Chat.find({
    members: {$all: [req.params.firstId, req.params.secondId]}
  })
  res.status(200).json(chat)
}

