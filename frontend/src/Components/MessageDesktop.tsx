// Hooks
import useUser from '../Hooks/useUser'
import useAdList from '../Hooks/useAdList'
import useAd from '../Hooks/useAd'
import { useEffect, useState, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useMessenger, { socket } from '../Hooks/useMessenger'
// Components
import AdMobile from './AdMobile'
import MessageHistory from './MessageHistory'
import Conversation from './Conversation'
import UserMessage from './UserMessage'
import InputMessage from './InputMessage'
// Libraries
import 'react-toastify/dist/ReactToastify.css'
// Framer-motion
import { motion } from 'framer-motion'
import axiosInstance from '../api/axiosInstance'
import { notify } from '../utils/toastNotification'
import ChatList from './ChatList'
import BrowseJobs from './BrowseJobs'


const MessageDesktop = () => {
  const {ad }  = useAd()
  const {adList} = useAdList('')
  const {user} = useUser()
  const chat = useMessenger()
  const {  c, onlineUsers, sendMessage, setIsConnected, isConnected, connect, currentChat, setCurrentChat, chats, setChats, setReceiveMessage, receiveMessage, receiveMessageFromSocket} = useMessenger()
  const [userData, setUserData] = useState<any>({})
  const [receiverInfo, setReceiverInfo] = useState<any>({})
  const [openChatBox, setOpenChatBox] = useState(false)
  const params = useParams()
  const path  = useLocation()
 



  const checkOnlineStatus = (chat:any) => {
    const chatMember = chat.members?.find((member:any) => member !== user?._id)
    const online = onlineUsers?.find((user:any) => user.userId === chatMember)
    return online ? true : false
  }


  
  return (
   
    <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        area-label='message'
        className='z-10 mx-auto w-[800px] h-full  min-h-[918px] flex flex-col justify-center items-center'
        // className='pt-10 pb-20  h-full   min-h-[700px]   flex  flex-wrap items-center justify-center text-textBlack md:pt-[140px] lg:pt-[120px] lg:min-h-[900px]  xl:pt-[120px]'
      >
    

        
        <BrowseJobs style={{padding:'10px', width:'700px'}}/>
           
        <div className='w-[800px] mx-auto flex justify-center items-center'>    
        {/* CHAT LIST */}   
          <ChatList setOpenChatBox={setOpenChatBox} setReceiverInfo = {setReceiverInfo} receiverInfo={receiverInfo} />

        {/* MAIN */}
    
        <div
          area-label='main'
          className=' h-full 
          flex flex-col justify-center items-center
           
          md:min-h-[650px] 
          
           xl:min-h-full'
        >

             {/* BOX*/}
        
        <div
            area-label='box'
            className='w-[300px] max-[767px]:mt-[6rem] min-h-[500px] sm:h-[600px]  md:w-[400px] xl:w-[500px] xl:h-[600px]
            flex flex-col justify-center item-center
            self-center rounded-r-[21px] bg-white shadow-standard z-10'
          >

          {/* USER-MESSAGE*/}   
           { currentChat  ? (
        <>
          <div 
            aria-label='UserMessage'
            className='h-full 
              relative flex justify-center '>
            { <UserMessage c={c} ad={ad}  userData = {userData}   receiverInfo={receiverInfo} online={checkOnlineStatus(currentChat)}/>}
          </div>


        {/* MESSAGE HISTORY */}
        <div
          aria-aria-label='history'
          className='h-full 
          relative flex justify-center'>
          <MessageHistory currentChat = {chat.currentChat} />
        </div>

        {/* INPUT MESSAGE */}
     
          <InputMessage currentChat = {chat.currentChat} />
          </>
          ) : ( 
              
              <p className=' self-center text-xl text-lightGray'>Choose a chat</p>
              
              )}
        </div>

      
      


        {/* BOX - END*/}

        {/* CIRCLE & LINE */}
        <div
            area-label='circle'
            className='hidden 
          w-[332px] h-[332px] absolute lg:top-[470px] lg:left-[-230px] lg:translate-y-[-50%] lg:rounded-full  lg:bg-lightGreen z-0
    xl:block'
          />

          <div
            area-label='line'
            className='hidden xl:block lg:absolute lg:top-[475px] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen z-0'
          />
          {/* CIRCLE & LINE - END */}
    
        </div>

        </div>
     
    </motion.div>
   
  )
}

export default MessageDesktop