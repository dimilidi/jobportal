// Hooks
import { useNavigate } from 'react-router-dom'
import useAds from '../Hooks/useAds'
// Components
import UniButton from '../Components/UniButton'
import Ad from '../Components/Ad'
import UniButtonWhite from '../Components/UniButtonWhite'
import UserCard from '../Components/UserCard'
import { useEffect, useState } from 'react'
import useUser from '../Hooks/useUser'
import { Ad as AdType } from '../type'
// framer-motion
import { motion } from 'framer-motion'

const Account = () => {
  const navigate = useNavigate()
  const { user, loading } = useUser()
  const ads = useAds(`/ads/?userId=${user?._id}`)

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
      className='mx-auto pb-10 w-full h-full min-h-[1200px] flex flex-col items-center justify-center gap-10 lg:pt-0 lg:min-h-[970px] lg:flex-row lg:gap-0'
    >
      {/* SEMICIRCLE */}
      <div className='w-24 h-24 hidden absolute right-[-3rem] top-[210px] rounded-full bg-lightGreen md:hidden lg:block lg:top-[170px]' />

      {/* LINE */}
      <div className='border-b-[3px] border-lightGreen absolute hidden lg:w-[20%] xl:w-[30%] md:block lg:top-[220px] lg:right-0' />

      {/* USER CARD */}
      <div className='h-full w-[95%] relative flex justify-center lg:w-[32%]'>
        <UserCard />
      </div>

      {/* ADS && BUTTONS CONTAINER */}
      <div className='max-w-[650px] h-full flex flex-col justify-center items-center md:h-[540px] lg:w-[62%] lg:max-w-[800px] lg:gap-10'>
        {/* BUTTONS */}
        <div className='w-full
              flex flex-col justify-center items-center gap-6
              sm:justify-center sm:flex-row
              lg:ml-20 lg:justify-start'>
          <UniButtonWhite
            text='Post Ad'
            type='button'
            onClick={() => navigate('/post-ad')}
          />

          <UniButton
            text='Browse Ads'
            type='button'
            onClick={() => navigate('/adslist')}
            style={{ z: 10 }}
          />
        </div>

        <h3 className='mt-10 text-lg font-semibold text-gray text-center'>
          Your Ads
        </h3>

        {/* ADS */}
        {/* Version 2: ads ?  user.ads : 'You don't have ads yet' */}
        <div className='mt-[30px] mb-[30px] w-full h-full flex flex-wrap justify-center items-start rounded-[21px] sm:px-5 sm:mt-3 sm:mb-20 sm:w-[600px] sm:h-[552px] sm:overflow-y-scroll md:w-[100%] md:h-[440px] lg:px-0 lg:mb-0 lg:h-[500px]'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            {ads.adList?.length === 0 ? (
              <div>You have currently no ads yet</div>
            ) : (
              ads.adList?.map((ad) => <Ad key={ad._id} ad={ad} />)
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Account
