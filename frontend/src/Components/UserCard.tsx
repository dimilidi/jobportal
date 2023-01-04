import UniButton from "./UniButton"
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail , MdCall, MdLocationOn } from "react-icons/md"
import useUser from "../Hooks/useUser"


type Props = {
  style?:{}
}

function UserCard(props: Props) {

  const user = useUser()

  return (
    <div
      // User Card
     style={props.style}
          className='mt-[0%] w-[100%] max-w-[450px]

            
            flex flex-col justify-center relative  
            shadow-standard 
            rounded-bl-[65px] rounded-br-[65px]
            bg-white
            sm:justify-center lg:mt-[10%] lg:justify-self-center
            '
        >
          {/* Avatar BG Halfcircle */}
          <div
            className='
            flex justify-center'
          >
            <div
              className='
            w-[100%] h-[13em] 
            flex justify-center absolute top-0 
            rounded-b-[200px]
            bg-darkBeige'
            ></div>
          </div>
          {/* .................... */}

          {/* Avatar Circle Container */}
          <div
            className='
            w-[100%] h-[6em] 
            flex justify-center
          '
          >
            <img
              className='
            w-[12em] h-[12em] mt-[2rem] 
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
              font-[700] text-[2.5rem]
              '
            >
              {user.user?.name}
            </h1>
            <h2
              className='
              mb-6 
              flex justify-center 
              text-[1.8rem] font-light'
            >
              Profession: ...
              {/* {user.user?.sector} */}
            </h2>
          </div>

          {/* Description Heading and Description */}
          <div className='pl-9 pr-9'>
            <h3 className='mb-1 text-[16px] font-[600]'>Description</h3>
            <p className='text-[15px] text-[gray]'>
              {user.user?.description}
            </p>
          </div>

          {/* Contact Data */}
          <div
            className='
          pl-5 pr-5
          my-6 
          text-[17px] font-[500] 
          min-[374px]:mx-[1em]'
          >
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdMail/> {user.user?.email}</div>
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdCall/> {user.user?.phone}</div>
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdLocationOn/> {user.user?.city}</div>
          </div>

          {/* Edit Profile Button Wrapper */}
          <div
            className='flex justify-center mb-10'
          >
            <UniButton
            area-label='EditProfileButton'
            text= 'Edit Profile'
            type='button'
            />
          </div>
        </div>
  )
}

export default UserCard