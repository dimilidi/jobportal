import { useNavigate, useParams } from 'react-router-dom'
import profileImg from '../assets/images/Account_profilDefault.png'
import useUser from '../Hooks/useUser'
import Dropdown from './Dropdown'
import { useState } from 'react'
import DotMenu from './DotMenu'
import { Ad as AdType } from '../type'


type Props = {
  ad: AdType
 
}

function Ad({ ad }: Props) {
  const params = useParams()
  const navigate = useNavigate()
  const user = useUser()

  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)


  return (
    
    <div className='
      w-full max-w-[600px] 
      cursor-pointer 
      max-sm:max-w-[90%]
      sm:py-6 
      md:py-1
      lg:max-w-[450px] 
      xl:max-w-[95%]'
    >
      <div className='
        h-[110px] my-1 
        flex justify-between items-center
        border-lightBeige border-t-2 text-[14px] 
        transition duration:1000 
        hover:ease-in-out hover:shadow-lg hover:bg-white hover:bg-opacity-50 hover:border-y-2 hover:rounded-xl
        max-sm:py-2
        md:h-[100px] md:border-y-2'
      >
        {/* LEFT SECTION */}
        <div className='
          min-w-[180px] h-full 
          flex justify-start 
          sm:gap-3'
        >
          {/* PROFILE IMAGE */}
          <div className='
            w-[60px] h-ful
            flex flex-col items-start justify-start 
            xl:w-[80px]'
          >
            <div className='
              w-[60px] h-full
              flex self-center justify-center items-end
              rounded-b-[40px] bg-lightBeige
              md:w-[60px]'
            >
              <div className='
                self-end 
                md:mb-6
                md:w-[50px]
                md:h-[30px]'
              >
                <img 
                  className='
                    w-[50px] h-[50px] mb-1 
                    rounded-full object-cover'
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
          <div onClick={() => navigate(`/ad/${ad?._id}`)}
            className='
            w-full ml-2
            flex flex-col justify-center items-start 
            md:justify-start'
          >
            <div className='w-full flex sm:w-[150px] xl:w-[300px]'>
              {/* TITLE, SECTOR */}
              <div className='w-[185px] relative text-textBlack sm:full'>
                <p className='truncate text-[16px] sm:text-[18px] text-textBlack'>
                  {ad.title}
                </p>
                <p className='
                  p-2 
                  absolute top-0 z-40 
                  text-darkGray text-[14px] opacity-0 rounded-md 
                  transition hover:visible bg-background 
                  sm:text-[18px]'
                >
                  {ad.title}
                </p>
                {/* SECTOR */}
                <p className='text-[16px] text-textBlack text-opacity-50 max-sm:text-[14px]'>
                  {ad.sector}
                </p>
              </div>
            </div>

            <div className='
            w-full
            flex justify-center gap-0.5
            max-sm-[320px]:flex-col
            sm:gap-2
            md:w-[100px]'>
              {/* LOCATION */}
              <div className='
                pt-1 
                relative flex justify-start items-center 
                text-[12px] text-textBlack text-opacity-50  
                sm:border-2 border-lightBeige rounded-full 
                sm:ml-14
                sm:w-[200px] sm:text-[14px] sm:pt-0 sm:px-2
                md:text-[16px]'
              >
                <p className='truncate'>{ad.location}</p>
                <p className='
                  absolute top-0 pt-1 z-40 
                  rounded-md
                bg-background text-darkGray shadow-standard 
                  opacity-0 transition hover:visible 
                  '
                  >{ad.location}
                </p>
              
              </div>
              {/* CATEGORY */}
              <div className='
                w-full md:h-10
                flex justify-center items-center 
                rounded-full text-[12px] text-textBlack text-opacity-50 
                max-sm:justify-start sm:px-2
                sm:w-[100px] sm:text-[14px] sm:bg-lightBeige 
                md:text-[16px]'
              >
                <p>{ad.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          onClick={() => navigate(`/ad/${ad?._id}`)}
          className='
            w-[50%] h-full
            flex flex-col justify-between items-center
            sm:gap-1
            md:w-[180px] md:flex-row md:self-end md:items-start'>
          {/* CREATED AT */}
          <div className='
            p-1 flex
            max-sm:text-[13px] text-textBlack text-opacity-50 
            sm:justify-end
            md:h-full 
            md:items-center
            md:text-[16px]'>
            <p>{new Date(ad.createdAt).toLocaleDateString()}</p>
          </div>

          {/* WAGE */}
          <div 
          className='
            w-full max-h-full px-3
            flex justify-end items-center 
            rounded-t-[20px] text-[14px]
            text-textBlack text-opacity-70 bg-lightBeige 
            
            max-sm:justify-start max-sm:h-[50px]
            md:mr-[15px] md:h-[100px] 
            md:rounded-r-[20px] md:rounded-tl-[0px]'
          >
            <div className='w-full text-[14px] font-medium text-center sm:font-[16px] py-10'>
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
