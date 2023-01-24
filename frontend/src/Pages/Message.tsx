// Hooks
import useUser from '../Hooks/useUser'
// Components
import AdMobile from '../Components/AdMobile'
import MessageHistory from '../Components/MessageHistory'
// Libraries
import 'react-toastify/dist/ReactToastify.css'
// Framer-motion
import { motion } from 'framer-motion'
import UserMessage from '../Components/UserMessage'
import InputMessage from '../Components/InputMessage'
import useAd from '../Hooks/useAd'
import { useEffect, useState } from 'react'
import useMessenger, { socket } from '../Hooks/useMessenger'
import axiosInstance from '../api/axiosInstance'
import Conversation from '../Components/Conversation'
import useAdList from '../Hooks/useAdList'


const Message = () => {
  const {ad} = useAd()
  const {adList} = useAdList('')
  const {user} = useUser()
  const chat = useMessenger()
  const { setIsConnected, connect, currentChat, setCurrentChat} = useMessenger()

  const [chats, setChats] = useState<any[]>([])
  const [userData, setUserData] = useState<any>({})
  const [receiverInfo, setReceiverInfo] = useState<any>({})


  //Connect chat && join a room
  useEffect(() => {
    if(user) { 
      connect(user._id)
     } 
      // ad && setRoom(ad.user._id)
      
      setIsConnected(true)
  },[user])

console.log('ONLINE',chat.onlineUsers);



  // Get Second Chat Member 
  const getUserData = () => {
  let userId = currentChat?.members?.find((id:string) => id !== user?._id)
  const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
  adOfSecondMember && setUserData(adOfSecondMember.user)
  }

  
  useEffect(() => {
    if(currentChat !=null) getUserData()
    
  },[user, adList])

  
  console.log('userdata',userData);


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
  },[user])


    // Receive Message from the Socket Server
    useEffect(() => {
      // if(chat.receiveMessage  && chat.receiveMessage.chatId === currentChat._id){
        chat.setMessages([...chat.messages, chat.receiveMessage])
        console.log('TEST',chat.receiveMessage);
        
      // }
       
     },[])
  



  return (
    <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        area-label='message'
        className='pt-10 pb-20 h-full  min-h-[700px]   flex flex-row items-center justify-center text-textBlack md:pt-[140px] lg:pt-[120px] lg:min-h-[900px]  xl:pt-[120px]'
      >
        {/* CHAT LIST SIDEBAR */}
        <div>
          <h2>Chats</h2>
          <div>
            {chats.map((chat:any) => ( //chats
              <div className='bg-green-300 w-[200px] h-[400px]' onClick={()=>setCurrentChat(chat)}>
                <Conversation key={chat._id} data = {chat} setReceiverInfo= {setReceiverInfo} />
              </div>
            ))}
          </div>
        </div>
        {/* MAIN */}
        <div
          area-label='main'
          className='w-full h-full
          flex flex-col justify-start
           sm:max-w-[900px]
          md:min-h-[650px] 
          
          xl:w-[800px] xl:min-h-full'
        >

          {/* {currentChat ? ( */}
            <>
             {/* BOX*/}
        <div
            area-label='box'
            className='w-[300px] max-[767px]:mt-[6rem] min-h-[500px] sm:h-[600px] sm: sm:w-[400px] xl:h-[600px]
            flex flex-col justify-between item-center
            self-center z-10 rounded-[21px] bg-white shadow-standard'
          >

        {/* USER-MESSAGE*/}
          <div 
            aria-label='UserMessage'
            className='h-full w-full
              relative flex justify-center '>
            {ad && <UserMessage ad={ad} userData = {userData} receiverInfo={receiverInfo}/>}
          </div>

        {/* MESSAGE HISTORY */}
        <div
          aria-aria-label='history'
          className='h-full w-full
          relative flex justify-center'>
          <MessageHistory currentChat = {chat.currentChat} />
        </div>

        {/* INPUT MESSAGE */}
        <div>
          <InputMessage currentChat = {chat.currentChat} />
        </div>

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
          </>
          {/* ) : ( */}
            {/* <h2>Tap on a Chat to start Conversation...</h2>
          )} */}

       
        </div>

    </motion.div>
  )
}

export default Message