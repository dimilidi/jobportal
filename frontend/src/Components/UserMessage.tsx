import useUser from '../Hooks/useUser'
import profileImg from '../assets/images/Account_profilOne.png'

function UserMessage() {
  const user = useUser().user
  return (
    <>
      {/* PROFILE IMAGE */}
      <div
        className='
          flex flex-row items-start justify-around
          sm:gap-5
          w-full'
      >
        <div
          className='mb-[20px] pt-8 w-[60px] 
          flex self-start justify-center items-end
          rounded-b-[40px] bg-lightBeige
          md:w-[80px]'
        >
          <div
            className='mb-4 mx-1 w-[50px] h-[40px]
          self-end rounded-full
          md:w-[80px] md:h-[40px] md:mb-9'
          >
            <img src={profileImg} alt='profileImg' />
          </div>
        </div>

        {/* USER NAME, and SECTION */}
        <div className='pt-5 md:pt-7'>
          <h1
            className=' flex justify-center
          font-medium xl:font-semibold
          min-w-[200px] 
          text-[1.5rem] md:text-[1.7rem]'
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
        </div>

        {/* LINE */}
        <div
          aria-label='Line bottom'
          className='border-b-[2px]
        border-darkBeige absolute
        w-full top-[90%] sm:top-[24%]
        md:top-[30%] lg:top-[28%] xl:top-[23%] 2xl:top-[24%]
        '
        ></div>
      </div>
    </>
  )
}

export default UserMessage
