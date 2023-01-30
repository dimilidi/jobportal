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


const Message = () => {
  const {ad} = useAd()
  const {adList} = useAdList('')
  const {user} = useUser()
  const chat = useMessenger()
  const {  c, onlineUsers, sendMessage, setIsConnected, isConnected, connect, currentChat, setCurrentChat, chats, setChats, setReceiveMessage, receiveMessage, receiveMessageFromSocket} = useMessenger()
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

// console.log('ONLINE',chat.onlineUsers);



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
      chat.setMessages([...chat.messages, receiveMessage])
    }, [receiveMessage])



  return (
   
    <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        area-label='message'
        className='pt-10 pb-20 h-full  min-h-[700px]   flex  items-center justify-center text-textBlack md:pt-[140px] lg:pt-[120px] lg:min-h-[900px]  xl:pt-[120px]'
      >
         <h3 className='text-xl' >Hello {user?.name}!</h3>

           
        {/* CHAT LIST */}   
          <ChatList setReceiverInfo = {setReceiverInfo} receiverInfo={receiverInfo} />
        

        {/* MAIN */}
        <div
          area-label='main'
          className=' h-full
          flex flex-col justify-start
           
          md:min-h-[650px] 
          
           xl:min-h-full'
        >

             {/* BOX*/}
        <div
            area-label='box'
            className='w-[300px] max-[767px]:mt-[6rem] min-h-[500px] sm:h-[600px] sm: sm:w-[400px] xl:h-[600px]
            flex flex-col justify-center item-center
            self-center z-10 rounded-r-[21px] bg-white shadow-standard'
          >

          {/* USER-MESSAGE*/}   
      { currentChat  ? (
        <>
          <div 
            aria-label='UserMessage'
            className='h-full w-full
              relative flex justify-center '>
            { <UserMessage c={c} ad={ad} userData = {userData}   receiverInfo={receiverInfo} online={checkOnlineStatus(currentChat)}/>}
          </div>

        {/* MESSAGE HISTORY */}
        <div
          aria-aria-label='history'
          className='h-full w-full
          relative flex justify-center'>
          <MessageHistory currentChat = {chat.currentChat} />
        </div>

        {/* INPUT MESSAGE */}
     
          <InputMessage currentChat = {chat.currentChat} />
          </>
          ) : ( 
            <p className='self-center text-xl text-lightGray'>Choose a chat</p>
            
          )}

        </div>

        {/* BOX - END*/}

        {/* CIRCLE & LINE */}
        <div
            area-label='circle'
            className='hidden 
          w-[332px] h-[332px] absolute lg:top-[470px] lg:left-[-230px] lg:translate-y-[-50%] lg:rounded-full  lg:bg-lightGreen z-0
          md:block'
          />

          <div
            area-label='line'
            className='hidden md:block lg:absolute lg:top-[475px] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen z-0'
          />
          {/* CIRCLE & LINE - END */}
    
        </div>
     
    </motion.div>
   
  )
}

export default Message