import { useNavigate, useParams } from 'react-router-dom'
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
import BackButton from '../Components/BackButton'

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
      className='h-full min-h-[1150px] relative flex justify-center items-center  text-Black lg:min-h-[920px] lg:pt-0'
    >
      <div
        area-label='circle'
        className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:fixed lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen'
      />
      <div
        area-label='line'
        className='hidden lg:block lg:fixed lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
      />

      {/* Main part of single ad */}

      <div
        area-label='main'
        className='w-full h-full  sm:w-[80%]  min-h-[920px] flex flex-col justify-between gap-5 lg:justify-center lg:w-[60%]'
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
      </div>
      {/* Ad - END */}

      <UniButton
        text='Contact'
        onClick={handleClick}
        className='my-7  w-[250px]  self-center lg:mb-0'
      />

      {/* ContactDetails DESKTOP - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails className='hidden lg:w-[200px] lg:h-[300px] lg:flex lg:items-center lg:fixed lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[230px]' />
      )}

      {/* ContactDetails MOBILE - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails className='w-[258px] h-[287px] flex justify-center self-center rounded-t-[65px] lg:hidden' />
      )}

      {/* Main part of single ad - END */}

      {/* image */}
      <img
        src={thinkingGirl}
        alt='illustration of girl in front of laptop'
        className='hidden lg:w-[180px] lg:h-[170px] lg:absolute lg:bottom-[-25px] lg:left-[12%] lg:block lg:z-30'
      />
      {/* image - END */}

      <ToastContainer position='bottom-right' />
    </div>
  )
}

export default SingleAd
