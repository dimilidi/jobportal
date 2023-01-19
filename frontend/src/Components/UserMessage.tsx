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
          flex flex-row items-start justify-around md:justify-center
          sm:gap-5 
          w-full'
      >
        <div
          className='mb-[20px] pt-8 w-[60px] 
          flex self-start justify-center items-end
          rounded-b-[40px] bg-lightBeige
          md:w-[80px]'
        >
            <img 
            className='mb-1 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full object-cover'
            src={ ad.user.avatar ? ad.user.avatar :  profileImg }  />
        </div>

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
