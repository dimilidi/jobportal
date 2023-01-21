import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilDefault.png'
import { Ad as AdType } from '../type'
import useAd from '../Hooks/useAd'

type Props = {
  ad: AdType
}

function UserMessage({ad}:Props) {
  const user = useUser()

  return (
    <>
      {/* PROFILE IMAGE */}
      <div
        className='
          flex flex-row items-start justify-center
        
          w-full'
      >
        <div
          className='p-1  h-[100px]
          flex flex-col justify-end items-end
          rounded-b-[40px] bg-lightBeige
          w-[90px]'
        >
            
          
          <div
            className=' mx-auto  w-[80px] h-[80px] relative flex justify-center
          self-end rounded-full
           '
          >

            <img 
               className='mb-1 w-[80px] h-[80px]  rounded-full object-cover'
              src={ ad.user.avatar ? ad.user.avatar :  profileImg }  /> 
          </div>

        </div>
          <div className=' w-[15px] h-[15px] absolute top-20 right-[167px] rounded-full bg-green-500' />

        {/* USER NAME, and SECTION */}
        {/* <div className='pt-5 md:pt-7'>
          <h1
            className=' flex justify-center
          font-medium xl:font-semibold
          min-w-[150px] 
          text-[1.3rem] md:text-[1.7rem]'
          >
            {user?.name}
          </h1>
          {user?.profession && (
            <h2
              className='
          mb-6 
          flex justify-center 
          text-[1rem]
          font-light'
            >
              {user.profession}
            </h2>
          )} 
        </div> */}
      </div>
    </>
  )
}

export default UserMessage
