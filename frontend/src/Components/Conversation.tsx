import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import useAd from '../Hooks/useAd'
import useAdList from '../Hooks/useAdList'
import useMessenger from '../Hooks/useMessenger'
import useUser from '../Hooks/useUser'
import AdsList from '../Pages/AdsList'

type Props = {
    data: {
        members: []
    }
    setReceiverInfo: (receiverInfo:{}) =>void
    online: boolean
}

function Conversation({data, setReceiverInfo, online}: Props) {
    // Hooks
    const {user} = useUser()
    const {adList} = useAdList('')
    const {currentChat} = useMessenger()
    // States
    const [userData, setUserData] = useState<any | null>(null)

    // Get Second Chat Member 
    const getUserData = () => {
        const userId = data?.members.find((id) => id !== user?._id)
        const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
       if(adOfSecondMember) {
        setUserData(adOfSecondMember.user)
        setReceiverInfo(adOfSecondMember.user)
        } 
    }
    
    
    useEffect(() => {
      getUserData()
    },[data, adList, user])




  return (
    <div>
       <div>{online ? 'Online' : 'Offline'}</div> 
        {/* <img src={userData?.avatar} alt="" /> */}
        <p>{userData?.name}</p>
      
    </div>
  )
}

export default Conversation