import UniButton from './UniButton'
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail, MdCall, MdLocationOn } from 'react-icons/md'
import useUser from '../Hooks/useUser'
import { useNavigate } from 'react-router-dom'

type Props = {
  style?: {}
}

function UserCard(props: Props) {
  // _id: string;
  // name: string;
  // email: string;
  // avatar: string;
  // city: string;
  // description: string;
  // phone: string;

  const user = useUser().user
  const navigate = useNavigate()
  return (
    <div
      // USER CARD
      style={props.style}
      className='mt-0 w-[100%] max-w-[450px] min-h-[540px]
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
            lg:w-[12rem] lg:h-[12rem] lg:mt-[1rem]
            absolute z-10 
            rounded-full'
          src={imageAccount}
        />
      </div>

      {/* User Name-, and Section */}
      <div className='mt-[9em]'>
        <h1
          className='
            flex justify-center 
            font-[700] text-[2.5rem]'
        >
          {user?.name}
        </h1>
        {user?.profession && (
          <h2
            className='
              mb-6 
              flex justify-center 
              text-[1.8rem] font-light'
          >
            {user.profession}
          </h2>
        )}
      </div>

      {/* Description Heading and Description */}
      {user?.description && (
        <div className='pl-9 pr-9'>
          <h3 className='mb-1 text-[16px] font-[600]'>Description</h3>
          <p className='text-[15px] text-[gray]'>{user?.description}</p>
        </div>
      )}

      {/* Contact Data */}
      <div
        className='
          pl-5 pr-5
          my-6 
          text-[17px] font-[500] 
          min-[374px]:mx-[1em]'
      >
        <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'>
          {' '}
          <MdMail /> {user?.email}
        </div>
        {user?.phone && (
          <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'>
            {' '}
            <MdCall /> {user?.phone}
          </div>
        )}
        {user?.city && (
          <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'>
            {' '}
            <MdLocationOn /> {user?.city}
          </div>
        )}
      </div>

      {/* Edit Profile Button Wrapper */}
      <div className='flex justify-center mb-10'>
        <UniButton
          area-label='EditProfileButton'
          text='Edit Profile'
          type='button'
          onClick={() => navigate('/edit-account')}
        />
      </div>
    </div>
  )
}

export default UserCard
