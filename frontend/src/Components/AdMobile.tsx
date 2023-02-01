import useAd from '../Hooks/useAd'
import avatar from '../assets/images/Account_profilDefault.png'
import { useParams } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import Spinner from './Spinner'

function AdMobile() {
  const ad = useAd()
  const user = useUser()

  if (ad.isLoading) return <Spinner />

  return (
    <div className='w-[100%] sm:px-3 '>
      <div className='sm:h-[130px] h-[110px]  w-full flex justify-around items-center  text-[14px] border-y-2 border-lightBeige'>
        {/* Left */}
        <div className='w-full h-full flex self-start justify-start '>
      {/* Profile Image*/}
      <div className='w-[70px] sm:w-[90px] absolute md:block'>
            <div className='w-[45px] rounded-b-[40px] flex justify-center items-end bg-lightBeige
            md:w-[67px] h-[55px] md:h-[85px]  
            sm:w-[80px] sm:h-[80px]'>
              <div className='mb-1  self-end'>
                <img
                  className='w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-fit sm:w-[70px]  sm:h-[70px] object-cover'
                  src={ad.ad?.user.avatar ? ad.ad.user.avatar : avatar}
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='py:2 md:pl-[80px] pt-1 w-[70%] md:w-[100%] flex flex-col justify-center items-start sm:w-[70%]'>
            <div className='w-[100%] flex'>
              {/* Title, Sector */}
              <div className='self-start text-textBlack ml-[50px] sm:ml-[90px] md:ml-0'>
                <p className='w-[150px] sm:text-[16px] text-textBlack'>{ad.ad?.title}</p>
                <p className='sm:text-[16px] text-textBlack text-opacity-50'>
                  {ad.ad?.sector}
                </p>
              </div>
            </div>

            <div className='w-[150px] p-2 md:p-0 md:py-2 flex  gap-1 sm:w-[200px]'>
              {/* Location */}
              <div className='px-2 py-1 w-[100px] flex justify-center items-center  border-2  text-[12px] text-textBlack text-opacity-50 text-center border-lightBeige rounded-full md:w-[120px] sm:text-[14px]'>
                <p className='truncate hover:text-clip'>{ad.ad?.location}</p>
              </div>
              {/* Category */}
              <div className='px-2 py-1  w-[100px] flex justify-center items-center text-[12px] text-textBlack text-opacity-50 rounded-full bg-lightBeige sm:w-[120px] sm:text-[14px]'>
                <p>{ad.ad?.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-[100px] sx:w-[60px] sm:w-[100px] h-full flex flex-wrap justify-end  items-end  '>
          {/* Created At */}
          <div className='text-[14px] text-textBlack text-opacity-50 md:text-[16px]'>
            {ad.ad && <p>{new Date(ad.ad.createdAt).toLocaleDateString()}</p>}
          </div>

          {/* Wage */}
          <div className='w-[60px] h-[60px] mt-[20px] flex justify-center items-center
          text-[14px] text-textBlack text-opacity-70 rounded-t-[20px] bg-lightBeige sm:w-[80px] 
          sm:mt-10
          md:text-[16px] md:w-[70px]
          '>
            <p className='text-center text-[13px]'>
              {ad.ad?.wage}€
              <span className='text-[12px] text-textBlack text-opacity-50 sm:text-[16px] '>
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