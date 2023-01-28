import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilDefault.png'
import { Ad as AdType } from '../type'
import useAd from '../Hooks/useAd'
import useMessenger from '../Hooks/useMessenger'
import { useEffect, useState } from 'react'
import useAdList from '../Hooks/useAdList'

type Props = {
  ad: AdType
  c: any
  userData: {
    avatar: string
    name:string
  }
  receiverInfo: {}
  online: boolean
 
}

function UserMessage({ ad, online }:Props) {

  const user = useUser()
  const {adList} = useAdList('')
  const{currentChat} = useMessenger()
  const [ userInfo, setUserInfo]  = useState<any>({})


  // Get Second Chat Member 
  const getUserData = () => {
    let userId = currentChat?.members?.find((id:string) => id !== user.user?._id)
    const adOfSecondMember = adList.find((ad) =>  userId == ad.user._id)
    adOfSecondMember && setUserInfo(adOfSecondMember.user)
    }

    useEffect(() => {
      if(currentChat !=null) getUserData()
      
    },[user, adList, ad, currentChat])


console.log(online);



useEffect(() => {
  
  getUserData()
},[currentChat, adList, user])





  return (
    <>
      {/* PROFILE IMAGE */}
      <div
        className=' ml-4
          flex  items-center justify-start gap-5
        
          w-full'
      >
        <div
          className='p-1  h-[80px] self-start
          flex flex-col justify-end items-center
          rounded-b-[40px] bg-lightBeige
          w-[85px]'
        >
          
          <div
            className=' mx-auto  w-[75px] h-[75px] relative flex flex-col  justify-center
          self-end rounded-full'
          >
             <img 
               className='mt-1 w-[75px] h-[75px]  rounded-full object-cover'
              src={ userInfo.avatar ? userInfo.avatar :  profileImg }  />  
          </div>

        </div>
        {/* Online Status */}
          {online && <div className=' w-[15px] h-[15px] absolute top-20 right-[167px] rounded-full bg-green-500' />}
          <div>
              <p className='text-xl'>{userInfo.name}</p>
              <p className=' text-lightGray'>{userInfo?.profession}</p>

          </div>
    
      </div>
    </>
  )
}

export default UserMessage
