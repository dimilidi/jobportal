import React, { useEffect, useState, useCallback } from 'react'
import {useLocation} from 'react-router-dom'
import axiosInstance from '../api/axiosInstance'
import useAd from '../Hooks/useAd'
import useAdList from '../Hooks/useAdList'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilDefault.png'
import { notify } from '../utils/toastNotification'
import UserCard from './UserCard'
import UserMessage from './UserMessage'
import { FaCircle } from 'react-icons/fa'

type Props = {
    data: {
        members: []
        _id: string
    }
    setReceiverInfo: (receiverInfo:{}) =>void
    online: any
    receiverInfo: {}
    setOpenChatBox: (openChatBox:boolean) => void
}

function Conversation({data, setReceiverInfo, online, receiverInfo, setOpenChatBox}: Props) {
    // Hooks
    const {user} = useUser()
    const {adList} = useAdList('')
    const {ad} = useAd()
    const {currentChat, setCurrentChat, setC, chats, setChats, c, notification, setNotification} = useMessenger()
    // States
    const [userData, setUserData] = useState<any | null>(null)

    // Get Second Chat Member 
    const getUserData = () => {
        const userId = data?.members?.find((id) => id !== user?._id)
        const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
        // console.log(adOfSecondMember);
        
       if(adOfSecondMember) {
        setUserData(adOfSecondMember.user)
        setReceiverInfo(adOfSecondMember.user._id)
        // console.log(receiverInfo);
        
      } 
    }
    
    const location = useLocation()
    // console.log(location.pathname);
    
    useEffect(() => {
      getUserData()
    },[data, adList])

    // console.log('CCCC',currentChat);



   // GET CHAT
   const fetchChat = useCallback(async () => {
    try {
      const {data} = await axiosInstance.get(`/chat/find/${user?._id}/${currentChat.members[1]}`)
      setC(data)
    } catch (error) {
      notify('Something went wrong!')
    }
  }, [c])


  useEffect(() => {
    if (currentChat) {
      fetchChat()
    }
  }, [currentChat, ad])
 
  
      // DELETE AD
  const deleteChat = async (chatId: string) => {
    try {
      await axiosInstance.delete(`/chat/${chatId}`)
      
     const newChats = chats?.filter((chat:any)=> chat._id !== chatId )
     setChats(newChats)
    //  chatId == data._id && 
     setOpenChatBox(false)
     

    } catch (error) {
      notify('Something went wrong')
    }

  }

  const handleDelete = (e:any) => {
    deleteChat(data._id)
  }

  const handleNotification = () => {
    notification?.map((notif:any) => {
      if(notif.senderId == userData?._id ){
        setNotification(notification.filter((n:any) => n != notif ))
      }
    })
  }



  console.log(userData?._id);
  
  


  return (
    <div onClick={handleNotification} className=' h-full w-full flex gap-5  border-b-2 border-darkBeige '>
     {/* Image */}
      <div  className='relative ml-5 p-1  h-[70px]
          flex flex-col justify-end items-end
          rounded-b-[70px] bg-lightBeige
          w-[66px]'>

       <div className=' h-[3.5rem] w-[3.5rem]'>
          <img className=' h-full w-auto object-cover rounded-full' src={userData?.avatar ? userData?.avatar  : profileImg } alt="" />
        </div> 
          {/* Online Status */}
         {online && <div className='z-10 w-[15px] h-[15px] absolute top-[53px] right-[40px] rounded-full bg-green-500' />}
      </div>

     {/* User Info &&  Notification */}
      <div className=' w-full flex flex-col justify-center items-start '>
        <div className=' flex'>
          <h3 className=' text-bold text-lg'>
            {userData?.name}
          </h3>
          { notification?.map((notif:any) => {
                return notif?.senderId == userData?._id && <FaCircle className='m-1 text-red-400' size={12} />
                
              })}
        </div>
        <p className=' text-lightGray'>{userData?.profession}</p>
      </div>
      
      {/* Delete Chat Icon */}
      <div className='h-full flex '>
        <span className='p-3 top-0 self-start' onClick={handleDelete}>X</span> 
      </div>
   
      
    </div>
  )
}

export default Conversation