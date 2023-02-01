import React from 'react'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import Conversation from './Conversation'

type Props = {
    setReceiverInfo: (receiverInfo:{}) =>void
    receiverInfo: {}
    setOpenChatBox: (openChatBox: boolean) => void
}

function ChatList({ setReceiverInfo, receiverInfo, setOpenChatBox }: Props) {

  const {user} = useUser()
  const {  setCurrentChat, chats, onlineUsers} = useMessenger()

  const handleCurrentChat = (chat:any) => {
    setCurrentChat(chat)
    setOpenChatBox(true)
  }
 
  const checkOnlineStatus = (chat:any) => {
    const chatMember = chat.members?.find((member:any) => member !== user?._id)
    const online = onlineUsers?.find((user:any) => user.userId === chatMember)
    return online ? true : false
  }


  return (
    <div className='w-[300px] xl:w-[400px] mt-0 h-[600px]  sm:w-[300px] xl:h-[600px]
    flex flex-col items-center
    rounded-l-[21px] bg-white shadow-standard overflow-y-scroll z-10'>
         
        {chats.map((chat:any) => ( //chats
            <div className='w-full h-[90px]' onClick={()=>handleCurrentChat(chat)}>
            { <Conversation key={chat._id} data = {chat} setReceiverInfo= {setReceiverInfo} receiverInfo={receiverInfo} online={checkOnlineStatus(chat)} setOpenChatBox={setOpenChatBox}/>} 
            </div>
        ))}

          
    </div>
  )
}

export default ChatList