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
import BrowseJobs from '../Components/BrowseJobs'

type Props = {}

const SingleAd = (props: Props) => {
  const user = useUser()
  const ads = useAds()

  const navigate = useNavigate()

  const handleClick = () => {
    if (user.isLoggedIn === false ) navigate('/auth-required')
  }

  // Show Spinner if isLoading
  if (ads.isLoading) {
    return <Spinner />
  }
  console.log(ads)

  return (
    <div
      area-label='page-singleAd'
      className=' h-full flex flex-col items-start text-textBlack '
    >
      <div area-label='wrapper' className='flex justify-center items-center flex-col min-h-[900px] w-full'>
        {/* Main part of single ad */}

        <div
          area-label='main'
          className='w-full sm:w-[80%] pt-[120px]  h-full flex flex-col justify-center 
          lg:w-[60%] xl:pt-0 lg:justify-center'>

          <BrowseJobs/>

          {/* Ad */}
          <div
            area-label='ad'
            className='py-5 px-9 mt-8 mx-8 
            min-w-[270px] 
            flex flex-col  justify-center item-center z-10 rounded-[21px] bg-white shadow-standard 
            sm:mx-0 
            lg:min-h-[400px] lg:min-w-[80%]'>

            <AdMobile />

            <div area-label='description' className='mt-3'>
              <h3 className='text-[20px]'>Description</h3>
              <p className='mt-2 text-gray/80'>{ads.ad?.description}</p>
            </div>

          </div>

          {/* ContactDetails MOBILE - If user exists, show ContactDetails */}
          <div className='flex justify-center pb-10'>
            {user.user && (
              <ContactDetails className=' w-[70%] pt-10 pb-32
              md:w-[80%]
              lg:w-[800px]
              flex justify-center self-center rounded-xl lg:hidden' />
              )}
          </div>

          {/* DO NOT show button when user is logged in */}
          {user.user ? '' : 
            <UniButton
              text='Contact'
              onClick={handleClick}
              className='my-7 self-center mb-32 lg:mb-0'
            />
          }
          
        </div>
        {/* Ad - END */}  

      </div>
      {/* Main part of single ad - END */}


      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster */}

      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden 
        lg:w-[332px] lg:h-[332px] lg:fixed lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full  lg:bg-lightGreen
        xl:block'/>
        
      <div
        area-label='line'
        className='hidden lg:block lg:fixed lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen' />
      {/* Circle and line in the background - END */}

      {/* ContactDetails DESKTOP - If user exists, show ContactDetails */}
      {user.user && (
        <ContactDetails className='hidden 
        lg:w-[200px] lg:m-8 lg:flex lg:items-center lg:fixed lg:-right-14 lg:top-[46%] lg:rounded-l-[65px] lg:translate-y-[-50%] 
        xl:min-w-[230px]' />
      )}
      {/* ContactDetails - END */}

      {/* image */}
      <img
        src={thinkingGirl}
        alt='illustration of girl in front of laptop'
        className='hidden xl:w-[200px] xl:h-[190px] xl:absolute xl:bottom-[10px] xl:left-[14%] xl:block lg:z-30'
      />
      {/* image - END */}

      <ToastContainer position='bottom-right' />

      {/* fixed or absolute elements - Circle, Line, ContactDetails in Desktop, Image, Toaster - END */}
      {/* test */}
    </div>
  )
}

export default SingleAd