import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import useAd from '../Hooks/useAd'
import useAdList from '../Hooks/useAdList'
import useUser from '../Hooks/useUser'
import AdsList from '../Pages/AdsList'

type Props = {
    data: {
        members: []
    }
}

function Conversation({data}: Props) {
    // Hooks
    const {user} = useUser()
    const {adList} = useAdList('')
    // States
    const [userData, setUserData] = useState<any | null>(null)

    // Get Second Chat Member 
    const getUserData = () => {
        const userId = data?.members.find((id) => id !== user?._id)
        const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
        adOfSecondMember && setUserData(adOfSecondMember.user)
    }
    
    
    useEffect(() => {
      getUserData()
    },[data, adList])


  return (
    <div>Conversation 
        <img src={userData.avatar} alt="" />
        <p>{userData?.name}</p>
    </div>
  )
}

export default Conversation