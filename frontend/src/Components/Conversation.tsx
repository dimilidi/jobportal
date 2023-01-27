import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import useAd from '../Hooks/useAd'
import useAdList from '../Hooks/useAdList'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilDefault.png'
import { notify } from '../utils/toastNotification'

type Props = {
    data: {
        members: []
        _id: string
    }
    setReceiverInfo: (receiverInfo:{}) =>void
    online: any
    receiverInfo: {}
}

function Conversation({data, setReceiverInfo, online, receiverInfo}: Props) {
    // Hooks
    const {user} = useUser()
    const {adList} = useAdList('')
    const {currentChat, setCurrentChat, setC} = useMessenger()
    // States
    const [userData, setUserData] = useState<any | null>(null)

    // Get Second Chat Member 
    const getUserData = () => {
        const userId = data?.members?.find((id) => id !== user?._id)
        const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
        console.log(adOfSecondMember);
        
       if(adOfSecondMember) {
        setUserData(adOfSecondMember.user)
        setReceiverInfo(adOfSecondMember.user)
        console.log(receiverInfo);
        
        } 
    }
    
    
    useEffect(() => {
      getUserData()
    },[data])


      // DELETE AD
  const deleteChat = async (chatId: string) => {
    try {
      await axiosInstance.delete(`/chat/${chatId}`)
      setC(null)
      // setCurrentChat(null)

    } catch (error) {
      notify('Something went wrong')
    }

  }


  console.log('COVERSATION',data);
  

  return (
    <div className='flex gap-2 bg-darkBeige rounded-md'>
       <div className=' '>{online ? 'Online' : 'Offline'}</div>
        <img className='h-[2.3rem] w-[2.3rem] object-cover rounded-full' src={userData?.avatar ? userData?.avatar  : profileImg } alt="" />
        <p>{userData?.name}</p>
        <span onClick={()=>deleteChat(data._id)}>x</span>
      
    </div>
  )
}

export default Conversation