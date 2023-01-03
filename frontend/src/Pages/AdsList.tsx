// Hooks
import { useNavigate } from 'react-router-dom'
import useAds from '../Hooks/useAds'
import useUser from '../Hooks/useUser'
// Components
import Ad from '../Components/Ad'
import UniButton from '../Components/UniButton'
import Spinner from '../Components/Spinner'
// Images
import man from '../assets/images/Ads_man_working.png'

const AdsList = () => {
  // CONSTANTS
  const user = useUser()
  const ads = useAds()
  const navigate = useNavigate()

  // HANDLE POST AD BUTTON
  const handleClick = () => {
    if (user.user) {
      navigate('/post-ad')
    } else {
      navigate('/auth-required')
    }
  }

  return (
    <div className='pt-[120px] pb-[80px] h-full w-full min-h-[920px]'>
      {/* LOADING SPINNER */}
      {ads.isLoading ? (
        <Spinner />
      ) : (
        <>
          {/* Heading with underline  */}
          <div className='mt-[30px]  h-[100px] w-full'>
            <h2 className=' text-center text-[45px]  leading-tight'>
              Be part of
              <p>
                our
                <span className='capitalize  text-lightGreen text-[45px'>
                  {' '}
                  mission
                </span>
              </p>
            </h2>

            {/* Line */}
            <div className='w-[52%] min-w-[220px] hidden  border-b-[3px] border-lightGreen sm:block absolute sm:top-[260px] sm:right-0' />
            {/* Semicircle */}
            <div className='w-24 h-24 hidden  right-[-3rem] top-[210px]  rounded-full bg-lightGreen lg:block absolute'></div>
          </div>

          {/* Main Container */}
          <div className='mx-auto  w-full h-full  flex justify-center items-start gap-10 '>
            {/* Image */}
            <div className='w-[500px] h-[500px] hidden 2xl:flex'>
              <img className='h-full w-full' src={man} alt='' />
            </div>

            {/* Ads Container */}
            <div className='mt-[30px] w-full h-full flex flex-wrap justify-items-center items-start sm:px-5 sm:w-[600px] sm:h-[552px]  md:w-[900px] md:h-[440px] sm:overflow-y-scroll '>
              {/* Ads */}
              <div className='mx-auto flex flex-wrap justify-center '>
                {ads.list.map((ad) => (
                  <Ad key={ad._id} ad={ad} />
                ))}
              </div>
            </div>
          </div>

          {/* Button Ad Post */}
          <div className='mb-[30px] p-[55px] w-full h-[50px] flex justify-center items-center xl:p-0'>
            <UniButton
              text='Post Ad'
              onClick={handleClick}
              className='my-5  w-[250px]  self-center lg:mb-0'
            />
          </div>
        </>
      )}
    </div>
  )
}

export default AdsList
