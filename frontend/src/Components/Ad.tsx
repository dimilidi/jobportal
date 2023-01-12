import { useNavigate, useParams } from 'react-router-dom'
import profileImg from '../assets/images/Account_profilDefault.png'
import useUser from '../Hooks/useUser'
import Dropdown from './Dropdown'
import { useState } from 'react'
import DotMenu from './DotMenu'
import { Ad as AdType } from '../type'
import useAdList from '../Hooks/useAdList'
import useAd from '../Hooks/useAd'

type Props = {
  ad: AdType
}

function Ad({ ad }: Props) {
  const params = useParams()
  const navigate = useNavigate()
  const user = useUser()
  // const ads = useAdList()
  // console.log('SINGLE',ad.user.avatar);
  

  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  console.log('AdUser',ad);
  

  return (
    <div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      className='w-full sm:px-[0px] md:py-1 max-w-[520px] xl:max-w-[680px]'
    >
      <div className='mx-auto h-[110px] w-[100%] flex justify-between items-center border-lightBeige border-t-2 text-[14px] md:h-[100px] md:border-y-2'>
        {/* LEFT SECTION */}
        <div className='h-full flex justify-start sm:gap-3'>
          {/* PROFILE IMAGE */}
          <div className='w-[60px] flex flex-col items-start justify-start xl:w-[80px]'>
            <div
              className='pt-5 w-[60px] 
                flex self-start justify-center items-end
                rounded-b-[40px] bg-lightBeige
                md:w-[60px]'
            >
              <div className=' self-end md:mb-6  md:w-[50px] md:h-[30px]'>
                <img 
                  className='mb-1 w-[50px] h-[50px] rounded-full'
                  src={ ad.user.avatar ? ad.user.avatar :  profileImg } 
                  alt='' 
                />
              </div>
            </div>
            {/* IF AD CREATED BY USER SHOW DOTS FOR DROPDOWN*/}
            {user.user?._id === ad.user?._id && (
              <DotMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            {isOpen && (
              <Dropdown
                ad={ad}
                modalOpen={modalOpen}
                close={close}
                open={open}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            )}
          </div>

          {/* LINK TO SINGLE AD  */}
          <div
            onClick={() => navigate(`/ad/${ad?._id}`)}
            className='w-[180px] flex flex-col sm:flex-row justify-center items-center cursor-pointer sm:w-[320px] md:flex-row'
          >
            <div className='w-[150px] flex sm:w-[200px] xl:w-[300px]'>
              {/* TITLE, SECTOR */}
              <div className='text-textBlack sm:w-[250px] '>
                <p className='text-[14px] sm:text-[18px] text-textBlack'>
                  {ad.title}
                </p>
                {/* SECTOR */}
                <p className='text-[16px] text-textBlack text-opacity-50'>
                  {ad.sector}
                </p>
              </div>
            </div>

            <div className='w-[150px] flex sm:flex-col justify-end gap-1 md:w-[80px] sm:gap-2'>
              {/* LOCATION */}
              <div className='p-1 w-[100px] flex justify-center items-center border-2 border-lightBeige rounded-full text-[12px] text-textBlack text-opacity-50 sm:w-[100px] sm:text-[14px] md:text-[16px]'>
                <p>{ad.location}</p>
              </div>
              {/* CATEGORY */}
              <div className='p-1 w-[100px] flex justify-center items-center rounded-full text-[12px]  text-textBlack text-opacity-50  bg-lightBeige sm:w-[100px] sm:text-[14px]  md:text-[16px]'>
                <p>{ad.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='w-[70px] h-full flex self-end flex-col justify-end  items-start gap-1 md:w-[180px] md:flex-row md:self-center md:items-center md:justify-between'>
          {/* CREATED AT */}
          <div className='text-[14px] text-textBlack text-opacity-50 md:ml-[10px] md:text-[16px]'>
            <p>{new Date(ad.createdAt).toLocaleDateString()}</p>
          </div>

          {/* WAGE */}
          <div className=' w-[70px] h-[60px] flex justify-center items-center rounded-t-[20px] text-[14px]  text-textBlack text-opacity-70 bg-lightBeige md:mr-[-15px] md:h-[100px] md:w-[70px] md:rounded-r-[20px] md:rounded-tl-[0px] md:text-[16px]'>
            <div className='text-[18px] font-medium'>
              {ad.wage}€
              <p className='text-[14px] font-medium text-textBlack text-opacity-50'>
                / hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ad
