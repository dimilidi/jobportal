import useAds from '../Hooks/useAd'
import avatar from '../assets/images/Account_profilDefault.png'
import { useParams } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import Spinner from './Spinner'

function AdMobile() {
  const params = useParams()
  const ads = useAds(`/ads/${params.id}`)
  const user = useUser()

  if (ads.isLoading) return <Spinner />

  return (
    <div className='px-2 py-[0px] w-full  sm:px-3 '>
      <div className='h-[110px] w-full flex justify-around items-center  text-[14px] border-y-2 border-lightBeige'>
        {/* Left */}
        <div className='w-full h-full flex self-start justify-start '>
          {/* Profile Image*/}
          <div className='w-[50px] sm:w-[60px] flex'>
            <div className='w-[50px] h-[75px] rounded-b-[40px] flex justify-center items-end bg-lightBeige'>
              <div className='mb-1 w-[40px]  h-[40px] self-end rounded-full bg-white'>
                <img
                  src={user.user?.avatar ? user.user.avatar : avatar}
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='px-2 pt-1 w-[100%] flex flex-col justify-center items-start sm:w-[70%]'>
            <div className='w-[100%] flex'>
              {/* Title, Sector */}
              <div className='self-start  text-textBlack'>
                <p className='sm:text-[18px] text-textBlack'>{ads.ad?.title}</p>
                <p className='sm:text-[16px] text-textBlack text-opacity-50'>
                  {ads.ad?.sector}
                </p>
              </div>
            </div>

            <div className='w-[150px] p-2 flex  gap-1 sm:w-[200px]'>
              {/* Location */}
              <div className='px-2 py-1  w-[100px] flex justify-center items-center  border-2  text-[12px] text-textBlack text-opacity-50 text-center border-lightBeige rounded-full md:w-[120px] sm:text-[14px]'>
                <p>{ads.ad?.location}</p>
              </div>
              {/* Category */}
              <div className='px-2 py-1  w-[100px] flex justify-center items-center text-[12px] text-textBlack text-opacity-50 rounded-full bg-lightBeige sm:w-[120px] sm:text-[14px]'>
                <p>{ads.ad?.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-[100px] sx:w-[60px] sm:w-[100px] h-full flex flex-wrap justify-end  items-end  '>
          {/* Created At */}
          <div className='text-[14px] text-textBlack text-opacity-50 md:text-[16px]'>
            {ads.ad && <p>{new Date(ads.ad.createdAt).toLocaleDateString()}</p>}
          </div>

          {/* Wage */}
          <div className='w-[50px] h-[60px] flex justify-center items-center text-[14px] text-textBlack text-opacity-70 rounded-t-[20px] bg-lightBeige sm:w-[70px] md:text-[16px]'>
            <p className='text-center text-[13px]'>
              {ads.ad?.wage}€
              <span className='text-[12px] text-textBlack text-opacity-50 sm:text-[16px]'>
                {' '}
                <br />/ hour
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdMobile
