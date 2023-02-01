import {GrDocumentText} from 'react-icons/gr'
// Hooks
import { Link, useNavigate } from 'react-router-dom'
import useUser from '../Hooks/useUser'
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail, MdCall, MdLocationOn } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'


type Props = {
  style?: {}
}



function UserCard(props: Props) {
  const user = useUser().user
  const navigate = useNavigate()

  

  return (
    <div

      // USER CARD
      style={props.style}
      className='
      w-[90%] pb-8 max-w-[500px] min-h-[540px] max-h-[570px]
      flex flex-col justify-start relative  
      shadow-standard 
      rounded-bl-[65px] rounded-br-[65px]
      bg-white
      sm:justify-between sm:w-[55%]
      lg:w-[90%]
      max-lg:mt-20
      lg:justify-self-center'>

      {/* AVATAR BG SEMICIRCLE */}
      <div className='flex justify-center'>
        <div
          className='
          w-full h-[9em] 
          flex justify-center absolute top-[.1em] 
          rounded-b-[200px]
          bg-darkBeige'
        ></div>
      </div>
      {/* .................... */}

      {/* AVATAR CIRCLE CONTAINER */}
      <div
        className='
            w-[100%] mt-4
            flex justify-center'
      >
        <img
          className='w-[10em] h-[10em]
            lg:w-[11rem] lg:h-[11rem] lg:mt-[.5rem]
            absolute z-10 object-cover
            rounded-full'
          src={user?.avatar ? user?.avatar : imageAccount}
        />
      </div>

      {/* User Name-, and Section */}
      <div className='mt-[10.5em] lg:mt-[12em]'>
        <h1
          className='
            h-10
            flex justify-center text-gray
            font-[600] text-[1.9rem] md:text-[2.5]'
        >
          {user?.name}
        </h1>
        {user?.profession && (
          <h2
            className='flex text-gray text-opacity-60 justify-center text-[1.5rem] font-light'>
            {user.profession}
          </h2>
        )}
      </div>

      {/* Description Heading and Description */}
      {user?.description && (
        <div className='w-[90%] min-h-[2rem] mt-4 mb-7 px-6 max-h-[8rem] overflow-y-auto'>
          <p className='p-2 text-sm font-medium text-[gray]'>{user?.description}</p>
        </div>
      )}

      {/* Contact Data */}
      <div className='px-4 mx-4 text-sm font-[400]'>
        <div className='flex flex-row gap-4 items-center text-gray text-opacity-80 leading-relaxed'>
          {' '}
          <MdMail className='opacity-50'/> {user?.email}
        </div>
        {user?.phone && (
          <div className='flex flex-row gap-4 items-center text-gray text-opacity-80 leading-relaxed'>
            {' '}
            <MdCall className='opacity-50'/> {user?.phone}
          </div>
        )}
        {user?.city && (
          <div className='flex flex-row gap-4 items-center text-gray text-opacity-80 leading-relaxed'>
            {' '}
            <MdLocationOn className='opacity-50'/> {user?.city}
          </div>
        )}



          {/* USER FILE*/}
          {user?.file == 'undefined' ? 
          ''
          :
          <div className='flex flex-row  gap-4 items-center text-gray text-opacity-80 leading-relaxed'>
            <GrDocumentText className='opacity-50 '/> 
            <a
              className=' flex flex-row cursor-pointer underline'
              target="_blank"
              href={user?.file}
              > 
              {user?.name} Documents
            </a>
          </div>
          }
    

          {/* USER FILE END */}

      </div>

        {/* Edit Profile Icon*/}
        <div className='flex justify-end relative right-[40px]'>
          <Link
          to={'/edit-account'}
          className='w-[40px] h-[40px] rounded-full border-lightBeige border-2 bg-darkBeige md:bg-darkBeige shadow-inner cursor-pointer
          text-textBlack text-opacity-50 hover:bg-lightBeige hover:bg-opacity-30 hover:text-textBlack ease-in-out duration-300 
          text-[18px] flex items-center justify-center'
          ><AiFillEdit /></Link>
        </div>

    </div>
  )
}

export default UserCard
