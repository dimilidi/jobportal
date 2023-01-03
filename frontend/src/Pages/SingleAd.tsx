import { useNavigate } from 'react-router-dom'
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
import Spinner from '../Components/Spinner'
// Libraries
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
// Images
import thinkingGirl from '../assets/images/SingleAd_girl.png'

import useUser from '../Hooks/useUser'
import useAds from '../Hooks/useAds'
import BackButton from '../Components/BrowseJobs'

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
  console.log(ads)

  return (
    <div
      area-label='page-singleAd'
      className='pt-[10%] h-full  flex flex-col items-center text-textBlack md:min-h-[800px]'
    >
      <div area-label='wrapper' className='flex justify-center'>
        {/* Main part of single ad */}

        <div
          area-label='main'
          className='w-full sm:w-[80%] flex flex-col justify-between gap-5 lg:justify-center lg:w-[60%]'
        >
          <BackButton />

          {/* Ad */}
          <div
            area-label='ad'
            className='py-5 px-9 mt-8 mx-8 min-w-[270px] flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard sm:mx-0 lg:min-h-[400px] '
          >
            <AdMobile />
            <div area-label='description' className='mt-3'>
              <h3 className='text-[20px]'>Description</h3>
              <p className='mt-2 text-gray/80'>{ads.ad?.description}</p>
            </div>
          </div>
          <UniButton
            text='Contact'
            onClick={handleClick}
            className='my-7 self-center lg:mb-0'
          />
        </div>
        {/* Ad - END */}

        {/* Main part of single ad - END */}
      </div>

      {/* ContactDetails MOBILE - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails className='w-[258px] h-[287px] flex justify-center self-center rounded-t-[65px] lg:hidden' />
      )}

      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster */}

      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:fixed lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen'
      />
      <div
        area-label='line'
        className='hidden lg:block lg:fixed lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
      />
      {/* Circle and line in the background - END */}

      {/* ContactDetails DESKTOP - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails className='hidden lg:w-[200px] lg:h-[300px] lg:flex lg:items-center lg:fixed lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[230px]' />
      )}
      {/* ContactDetails - END */}

      {/* image */}
      <img
        src={thinkingGirl}
        alt='illustration of girl in front of laptop'
        className='hidden lg:w-[230px] lg:h-[220px] lg:absolute lg:bottom-[10px] lg:left-[14%] lg:block lg:z-30'
      />
      {/* image - END */}

      <ToastContainer position='bottom-right' />

      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster - END */}
    </div>
  )
}

export default SingleAd
