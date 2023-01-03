// Hooks
import useAds from '../Hooks/useAds'
import useUser from '../Hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'
// Components
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
import Spinner from '../Components/Spinner'
// Libraries
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
import { motion } from 'framer-motion'
// Icons
import { IoMdArrowBack } from 'react-icons/io'
// Images
import thinkingGirl from '../assets/images/SingleAd_girl.png'

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
    <>
      <div
        area-label='page-singleAd'
        className='h-full min-h-[1150px] relative flex justify-center items-center  text-Black lg:min-h-[920px] lg:pt-0'
      >
        {/* Circle and line in the background */}
        <div
          area-label='circle'
          className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:absolute lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen xl:h-[380px] xl:w-[380px]'
        />
        <div
          area-label='line'
          className='hidden lg:block lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
        />
        {/* Circle and line in background - END */}

        {/* Main part of single ad */}
        <div
          area-label='main'
          className='w-full h-full  sm:w-[80%]  min-h-[920px] flex flex-col justify-between gap-5 lg:justify-center lg:w-[60%]'
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
            className='mx-auto py-5 px-0 sm:px-3 lg:mt-5 lg:pt-12 lg:p-26 w-[85%]  flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard lg:min-h-[400px] mt-0'
          >
            <AdMobile />
            <div
              area-label='description'
              className='mt-3 px-5 min-h-[300px] w-full lg:p-10 sm:py-4'
            >
              <h3 className='text-[20px]'>Description</h3>
              <p className='mt-2  text-gray/80 text-justify break-words'>
                {ads.ad?.description}
              </p>
            </div>
          </div>
          {/* Ad - END */}

          {/* If user exists, show ContactDetails - MOBILE */}
          {user.user && (
            <ContactDetails className='px-1 sm:px-0 w-[250px] h-[300px] flex justify-center self-center rounded-t-[65px] lg:hidden text-8xl' />
          )}

          <UniButton
            text='Contact'
            onClick={handleClick}
            className='my-7  w-[250px]  self-center lg:mb-0'
          />
        </div>
        {/* Main part of single ad */}

        {/* If user exists, show ContactDetails - DESKTOP */}
        {user.user && (
          <ContactDetails className='hidden lg:w-[200px] lg:h-[260px] lg:flex lg:items-center lg:absolute lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[280px] xl:h-[300px]' />
        )}

        <ToastContainer position='top-right' />
      </div>
        {/* image */}
          <img
            src={thinkingGirl}
            alt='illustration of girl in front of laptop'
            className='hidden lg:w-[230px] lg:h-[220px] lg:absolute lg:bottom-[30px] lg:left-[14%] lg:block lg:z-30'
          />
        {/* image - END */}
    </>
  )
}

export default SingleAd
