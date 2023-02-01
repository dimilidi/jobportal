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
// Icons
import { IoMdArrowBack } from 'react-icons/io'


const MessageMobile = () => {
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
        className='pt-[90px] pb-20 h-full  min-h-[875px]   flex flex-col items-center justify-center text-textBlack md:pt-[140px] lg:pt-[120px] lg:min-h-[900px]  xl:pt-[120px]'
      >
        <div className='w-[300px] flex '>

          <button 
            style = {{visibility: openChatBox ? 'visible' : 'hidden' }} 
            className='mx-auto ml-[0px] flex items-center' 
            onClick={()=>setOpenChatBox(false)}>
             <span className='h-[14px] border-r-[2px] border-textBlack' />
              <IoMdArrowBack className='text-textBlack text-[16px] font-bold xl:text-[20px]'/>
          </button>
       </div>
           
        {/* CHAT LIST */}   
        {!openChatBox &&
          <ChatList setOpenChatBox={setOpenChatBox} setReceiverInfo = {setReceiverInfo} receiverInfo={receiverInfo} />
        }

        {/* MAIN */}
        
        <div
          area-label='main'
          className=' h-full
          flex flex-col justify-start
           
          md:min-h-[650px] 
          
           xl:min-h-full'
        >

             {/* BOX*/}
             { openChatBox  ? (
        <>
        <div
            area-label='box'
            className='w-[300px]  mt-[1rem] h-[600px] sm: lg:w-[400px] xl:h-[600px]
            flex flex-col justify-center item-center
            self-center z-10 rounded-r-[21px] bg-white shadow-standard'
          >

          {/* USER-MESSAGE*/}   
      
          <div 
            aria-label='UserMessage'
            className='h-full w-full 
              relative flex justify-center items-center self-center '>
            { <UserMessage c={c} ad={ad}  userData = {userData}   receiverInfo={receiverInfo} online={checkOnlineStatus(currentChat)}/>}
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
          </div>
          </>
          ) : ( 

            <p className='hidden self-center text-xl text-lightGray'>Choose a chat</p>
            
          )}

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

export default MessageMobile