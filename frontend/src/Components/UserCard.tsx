import UniButton from './UniButton'
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail, MdCall, MdLocationOn } from 'react-icons/md'
import useUser from '../Hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'

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
      className='mt-0 w-[90%] max-w-[450px] min-h-[540px]
            flex flex-col justify-center relative  
            shadow-standard 
            rounded-bl-[65px] rounded-br-[65px]
            bg-white
            sm:justify-center lg:justify-self-center
            '
    >
      {/* AVATAR BG SEMICIRCLE */}
      <div className='flex justify-center'>
        <div
          className='w-[100%] h-[13em] 
            flex justify-center absolute top-0 
            rounded-b-[200px]
            bg-darkBeige'
        ></div>
      </div>
      {/* .................... */}

      {/* AVATAR CIRCLE CONTAINER */}
      <div
        className='
            w-[100%] h-[6em] 
            flex justify-center'
      >
        <img
          className='w-[11em] h-[11em] mt-[2.8rem] 
            lg:w-[12rem] lg:h-[12rem] lg:mt-[2.5rem]
            absolute z-10 object-cover
            rounded-full'
          src={user?.avatar ? user?.avatar : imageAccount}
        />
      </div>

      {/* User Name-, and Section */}
      <div className='mt-[9em]'>
        <h1
          className='
            flex justify-center text-gray
            font-[700] text-[2rem] md:text-[2.5]'
        >
          {user?.name}
        </h1>
        {user?.profession && (
          <h2
            className='mb-6 flex text-gray text-opacity-60 justify-center text-[1.8rem] font-light'>
            {user.profession}
          </h2>
        )}
      </div>

      {/* Description Heading and Description */}

      {user?.description && (
        <div className='px-6 min-h-[100px] w-full md:h-[10rem]  lg:h-auto'>
          <p className='p-2 text-sm font-medium text-[gray]'>{user?.description}</p>
        </div>
      )}

      {/* Contact Data */}
      <div className=' px-8 my-6 text-[17px] font-[500] min-[374px]:mx-[1em]'>
        <div className='flex flex-row gap-4 items-center  text-gray text-opacity-80 leading-relaxed'>
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
      </div>

      {/* Edit Profile Button Wrapper */}
      <div className='flex justify-center mb-10'>

        <p className='mt-1 py-2 px-8 rounded-full  border-lightBeige border-2 bg-darkBeige md:bg-darkBeige shadow-md cursor-pointer
        text-textBlack font-medium text-opacity-50 hover:bg-lightBeige hover:bg-opacity-30 hover:text-textBlack ease-in-out duration-300 

        text-[16px] flex items-center sm:justify-center lg:justify-start'>
        <Link to='/edit-account'>Edit Profile</Link>
        </p>
      </div>
    </div>
  )
}

export default UserCard
