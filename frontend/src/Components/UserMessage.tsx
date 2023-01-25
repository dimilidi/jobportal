import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilDefault.png'
import { Ad as AdType } from '../type'
import useAd from '../Hooks/useAd'
import useMessenger from '../Hooks/useMessenger'
import { useEffect, useState } from 'react'
import useAdList from '../Hooks/useAdList'

type Props = {
  ad: AdType
  userData: {
    avatar: string
    name:string
  }
  receiverInfo: {
    avatar: string
    name:string
  }
}

function UserMessage({ad, userData, receiverInfo}:Props) {

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

  console.log('USERDATA', userInfo);
  console.log('INFO', receiverInfo);
  // console.log('INFO', currentChat)

  return (
    <>
      {/* PROFILE IMAGE */}
      <div
        className='
          flex flex-col items-center justify-start
        
          w-full'
      >
        <div
          className='p-1  h-[100px]
          flex flex-col justify-end items-end
          rounded-b-[40px] bg-lightBeige
          w-[90px]'
        >
          
          <div
            className=' mx-auto  w-[80px] h-[80px] relative flex flex-col justify-center
          self-end rounded-full'
          >
             <img 
               className='mb-1 w-[80px] h-[80px]  rounded-full object-cover'
              src={ userInfo.avatar ? userInfo.avatar :  profileImg }  />  
          </div>

        </div>
          <div className=' w-[15px] h-[15px] absolute top-20 right-[167px] rounded-full bg-green-500' />
          <div>
              <p>{userInfo.name}</p>
          </div>
    
      </div>
    </>
  )
}

export default UserMessage
