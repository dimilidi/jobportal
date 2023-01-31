// Hooks
import useUser from '../Hooks/useUser'
import useAdList from '../Hooks/useAdList'
import useAd from '../Hooks/useAd'
import { useEffect, useState, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useMessenger, { socket } from '../Hooks/useMessenger'
// Components
import AdMobile from '../Components/AdMobile'
import MessageHistory from '../Components/MessageHistory'
import Conversation from '../Components/Conversation'
import UserMessage from '../Components/UserMessage'
import InputMessage from '../Components/InputMessage'
// Libraries
import 'react-toastify/dist/ReactToastify.css'
// Framer-motion
import { motion } from 'framer-motion'
import axiosInstance from '../api/axiosInstance'
import { notify } from '../utils/toastNotification'
import ChatList from '../Components/ChatList'
import MessageDesktop from '../Components/MessageDesktop'
import MessageMobile from '../Components/MessageMobile'


const Message = () => {
  const {ad }  = useAd()
  const {adList} = useAdList('')
  const {user} = useUser()
  const chat = useMessenger()
  const { notification, setNotification,  c, onlineUsers, sendMessage, setIsConnected, isConnected, connect, currentChat, setCurrentChat, chats, setChats, setReceiveMessage, receiveMessage, receiveMessageFromSocket} = useMessenger()
  const [userData, setUserData] = useState<any>({})
  const [receiverInfo, setReceiverInfo] = useState<any>({})
  const [openChatBox, setOpenChatBox] = useState(false)
  const params = useParams()
  const path  = useLocation()
 



  //Connect chat 
  useEffect(() => {
    
    if(user) { 
      console.log(connect);
      connect(user._id)
     } 
      setIsConnected(true)
  },[user])


  const checkOnlineStatus = (chat:any) => {
    const chatMember = chat.members?.find((member:any) => member !== user?._id)
    const online = onlineUsers?.find((user:any) => user.userId === chatMember)
    return online ? true : false
  }



  // Get Second Chat Member 
  const getUserData = () => {
  let userId = currentChat?.members?.find((id:string) => id !== user?._id)
  const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
  adOfSecondMember && setUserData(adOfSecondMember.user)
  }

  
  useEffect(() => {
    if(currentChat !=null) getUserData()
  },[user, adList, ad,  c])

  

  // GET CHATS
  const getChats = async() => {
    try {
      const {data} = await axiosInstance.get(`/chat/${user?._id}`)
      setChats(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getChats()
  },[user, ad])



    // Send Message to the Socket Server
    useEffect(() => {
      if(sendMessage !==null ) {
        chat.sendMessageToSocket(sendMessage)
      }
    },[sendMessage])


    // Receive Message from the Socket Server
    useEffect(() => {
      socket.on("receive-message", (data:any) => {
      setReceiveMessage(data)
    })
     },[socket])


    useEffect(() => {
      if(!currentChat || currentChat._id !== receiveMessage.chatId) {
        if(!notification.includes(receiveMessage)){
          setNotification([receiveMessage, ...notification])
          getChats()
        }
      }else {
        chat.setMessages([...chat.messages, receiveMessage])
      }
    }, [receiveMessage])

    console.log('RECEIVE-MESSAGE',receiveMessage);
    console.log('NOTIFICATION',notification);
    
    

  
  return (
    <>
    <div className='hidden md:block'>
      <MessageDesktop />
    </div>
    <div className='md:hidden'>
      <MessageMobile />
    </div>
    </>
  )
}

export default Message