import { useNavigate, Link } from 'react-router-dom'
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
// Libraries
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../utils/toastNotification'
// Styles
import thinkingGirl from '../assets/images/SingleAd_girl.png'
import Spinner from '../Components/Spinner'

import useUser from '../Hooks/useUser'
import useAds from '../Hooks/useAds'
import JobsButton from '../Components/JobsButton'
import BigCircle from '../Components/background/BigCircle'
import Line from '../Components/background/Line'

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
      className='pt-[110px] relative flex justify-center text-Black'
    >
      <BigCircle />
      <Line />

      {/* Main part of single ad */}
      <div
        area-label='main'
        className='w-full sm:w-[80%] flex flex-col justify-around gap-5 lg:justify-center lg:w-[60%]'
      >
        <JobsButton />

        {/* Ad */}
        <div
          area-label='ad'
          className='py-5 px-9 mt-8 mx-8 min-w-[270px] flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard sm:mx-0 lg:min-h-[400px] '
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
              Dignissimos ipsum atque voluptate, placeat officia ipsa. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              dignissimos expedita delectus ipsa, tempore, fugiat quae inventore
              dicta nihil aut, amet officia maiores eveniet? Neque nemo
              assumenda, incidunt eaque vero error, velit in optio voluptas nam
              impedit ab nostrum qui modi sequi, cum architecto quaerat
              laboriosam perspiciatis quo distinctio ea voluptatum.
            </p>
          </div>
        </div>
        {/* Ad - END */}

        {/* If user exists, show ContactDetails */}
        {user.user && (
          <ContactDetails className='hidden lg:w-[200px] lg:h-[300px] lg:flex lg:items-center lg:fixed lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[230px]' />
        )}
        <UniButton
          text='Contact'
          onClick={handleClick}
          className='my-5 self-center'
        />
        {user.user && (
          <ContactDetails className='w-[258px] h-[287px] flex justify-center self-center rounded-t-[65px] lg:hidden' />
        )}
      </div>
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
