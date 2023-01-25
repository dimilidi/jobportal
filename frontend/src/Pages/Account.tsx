// Hooks
import { useNavigate } from 'react-router-dom'
import useAdList from '../Hooks/useAdList'
// Components
import UniButton from '../Components/UniButton'
import Ad from '../Components/Ad'
import UserCard from '../Components/UserCard'
import { useEffect } from 'react'
import useUser from '../Hooks/useUser'
// framer-motion
import { motion } from 'framer-motion'
import PaginationButtons from '../Components/PaginationButtons'

const Account = () => {
  const navigate = useNavigate()
  const { user, loading } = useUser()
  const { pageCount, page, setPage } = useAdList(`userId=${user?._id}`)
  const { adList } = useAdList(`userId=${user?._id}&page=${page}`)

  
  useEffect(() => {
    if (!user && !loading) {
      navigate('/auth-required')
    }
  }, [user])

 

  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
      className='mx-auto pt-[80px] pb-10 w-full h-full min-h-[1100px] flex flex-col items-center justify-center gap-10 md:gap-3 lg:min-h-[970px] lg:flex-row lg:gap-0'
    >
      {/* SEMICIRCLE */}
      <div className='w-[50px] h-24 hidden absolute right-0 rounded-tl-full rounded-bl-full bg-lightGreen md:hidden lg:block lg:top-[125px] xl:top-[130px]' />
      {/* LINE */}
      <div className='border-b-[3px] border-lightGreen absolute hidden lg:w-[20%] xl:w-[30%] md:block lg:top-[175px] xl:top-[180px] lg:right-0' />

      {/* USER CARD */}
      <div className='h-full w-[95%] relative flex justify-center lg:w-[32%]'>
        <UserCard />
      </div>

      {/* ADS && BUTTONS CONTAINER */}
      <div className='max-w-[650px] h-full flex flex-col justify-start items-start md:h-[650px] lg:h-[703px] lg:w-[62%] lg:max-w-[800px] lg:gap-5'>
        {/* BUTTONS */}
        <div
          className='
              w-full flex flex-row justify-center items-center gap-2 md:gap-3
              sm:justify-center sm:flex-row md:justify-center
              lg:justify-start md:mt-14 lg:mt-0'
        >
          <UniButton
            text='Post Ad'
            type='button'
            onClick={() => navigate('/post-ad')}
            style={{ z: 10, border:'white' }}
          />

          <UniButton
            text='Browse Ads'
            type='button'
            onClick={() => navigate('/adslist')}
            style={{ z: 10 }}
          />
        </div>

        <h3 className='mt-10 md:mb-[30px] lg:mt-[60px] lg:mb-[-20px] xl:mb-[-10px] text-lg font-semibold text-gray text-opacity-40 text-center lg:w-[87%] lg:flex lg:justify-start xl:w-[85%]'>
          Your Ads
        </h3>

        {/* ADS */}
        <div className='bg-darkBeige pt-14 bg-opacity-30 mt-[30px] mb-[30px] w-full h-full flex flex-wrap justify-center items-start md:rounded-[21px] sm:px-5 sm:mt-3 sm:mb-20 sm:w-[600px] sm:h-[552px] md:w-[100%] md:h-[250px] lg:px-0 lg:mb-0 lg:h-[450px]'>
          <div className='w-full flex flex-wrap justify-center items-center md:justify-start lg:justify-center'>
            {adList?.length === 0 ? (
              <div
                className='font-bold relative text-xl sm:text-xl
                  top-[0px] md:top-[80px] lg:top-[180px] xl:top-[130px] md:text-4xl
                  text-center text-darkBeige'
              >
                You have currently <br></br> no ads yet
              </div>
            ) : (
              adList?.map((ad) => <Ad key={ad._id} ad={ad} />)
            )}
          </div>
        </div>
        {pageCount >0 &&
        <div
          aria-label='paginationButtons'
          className='mb-[50px] lg:mb-0 w-full lg:flex lg:justify-end xl:w-[90%]'>
          <PaginationButtons page ={page} setPage = {setPage} pageCount={pageCount}/>
        </div>}
      </div>
    </motion.div>
  )
}

export default Account
