import React from 'react'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import Conversation from './Conversation'

type Props = {
    setReceiverInfo: (receiverInfo:{}) =>void
    receiverInfo: {}
}

function ChatList({ setReceiverInfo, receiverInfo }: Props) {

  const {user} = useUser()
  const {  setCurrentChat, chats, onlineUsers} = useMessenger()
 
  const checkOnlineStatus = (chat:any) => {
    const chatMember = chat.members?.find((member:any) => member !== user?._id)
    const online = onlineUsers?.find((user:any) => user.userId === chatMember)
    return online ? true : false
  }
  return (
    <div className='w-[300px] max-[767px]:mt-[6rem] min-h-[500px] sm:h-[600px] sm: sm:w-[300px] xl:h-[600px]
    flex flex-col item-center
    self-center z-10 rounded-l-[21px] bg-white shadow-standard'>
         
        {chats.map((chat:any) => ( //chats
            <div className='w-full h-[90px]' onClick={()=>setCurrentChat(chat)}>
            { <Conversation key={chat._id} data = {chat} setReceiverInfo= {setReceiverInfo} receiverInfo={receiverInfo} online={checkOnlineStatus(chat)}/>} 
            </div>
        ))}

          
    </div>
  )
}

export default ChatList