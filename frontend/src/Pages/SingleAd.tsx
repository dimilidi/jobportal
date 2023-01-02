import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
// Libraries
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
import { motion } from 'framer-motion'
// Styles
import { IoMdArrowBack } from 'react-icons/io'
import thinkingGirl from '../assets/images/SingleAd_girl.png'
import Spinner from '../Components/Spinner'

type Props = {}

const SingleAd = (props: Props) => {
  const user = useUser()
  const ads = useAds()

  const navigate = useNavigate()

  const handleClick = () => {
    !user && navigate('/auth-required')
    user && notify('Contact page is not available')
  }

  // Show Spinner if isLoading
  if (ads.isLoading) {
    return <Spinner />
  }

  return (
    <div
      area-label='page-singleAd'
      className='pt-[70px] relative flex justify-center text-Black'
    >
      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:absolute lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen'
      />
      <div
        area-label='line'
        className='hidden lg:block lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
      />
      {/* Circle and line in background - END */}

        {/* Main part of single ad */}
        <div
          area-label='main'
          className='w-full h-full  sm:w-[80%]  min-h-[920px] flex flex-col justify-around gap-5 lg:justify-center lg:w-[60%]'
        >
          {/* Browse Job button */}
          <Link to={'/adslist'}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            whileTap={{
              opacity: 1,
              scale: 1.05,
            }}
            area-label='back-button-to-jobs'
            className='hidden lg:flex lg:items-center'
          >
              <span className='flex items-center w-[24px]'>
                <div className='h-[14px] border-r-[2px] border-textBlack' />
                <IoMdArrowBack className='text-textBlack text-[20px]' />
              </span>
              <span className='text-darkGreen font-bold text-[20px] '>
                Browse Jobs
              </span>
          </motion.div>
            </Link>
          {/* Browse Job button - END */}

        {/* Ad */}
        <div
          area-label='ad'
          className='py-5 px-9 mt-8 min-w-[270px] flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard lg:min-h-[400px] '
        >
          <AdMobile />
          <div area-label='description' className='mt-3'>
            <h3 className='text-[20px]'>Description</h3>
            <p className='mt-2 text-gray/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              dignissimos expedita delectus ipsa, tempore, fugiat quae inventore
              dicta nihil aut, amet officia maiores eveniet? Neque nemo
              assumenda, incidunt eaque vero error, velit in optio voluptas nam
              impedit ab nostrum qui modi sequi, cum architecto quaerat
              laboriosam perspiciatis quo distinctio ea voluptatum. Magnam hic
              inventore iusto eveniet voluptates libero nemo, commodi itaque
              enim voluptatem in. Eum in odit vel, consequuntur labore debitis
              officiis ad quia ducimus provident tenetur voluptatum laboriosam
              nulla dolorum fugit. Modi corrupti necessitatibus perspiciatis
              temporibus ipsam doloremque molestiae similique explicabo ea!
              Dignissimos ipsum atque voluptate, placeat officia ipsa.
            </p>
          </div>
        </div>
        {/* Ad - END */}

        <UniButton
          text='Contact'
          onClick={handleClick}
          className='my-7 self-center lg:mb-0'
        />

        {/* If user exists, show ContactDetails - MOBILE */}
        {user.user && (
          <ContactDetails className='hidden lg:w-[200px] lg:h-[260px] lg:flex lg:items-center lg:absolute lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[280px] xl:h-[300px]' />
        )}

        {/* image */}
        <img
          src={thinkingGirl}
          alt='illustration of girl in front of laptop'
          className='hidden lg:w-[230px] lg:h-[220px] lg:absolute lg:bottom-[-30px] lg:left-[14%] lg:block lg:z-30'
        />
        {/* image - END */}
        <ToastContainer position='bottom-right' />
      </div>
    </>
  )
}

export default SingleAd
