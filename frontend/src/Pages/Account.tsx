import { Link } from 'react-router-dom'
import UniButton from '../Components/UniButton'
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail , MdCall, MdLocationOn} from "react-icons/md"
import Ad from '../Components/Ad'
import useAds from '../Hooks/useAds'


type Props = {}

const handleClick = async () => {
  alert(`Click`)
}

const Account = (props: Props) => {
  const ads = useAds()
  return (
    <>
      {/* Grid Container For Whole Page */}
      <div
        className=' 
      md:pt-[100px]
      w-[100%] md:h-[90vh]
      grid
      bg-background
      sm:grid-cols-1 md:grid-cols-2
      '
      >
        {/* User Card Container */}
        <div
          className='
        max-w-[450px] m-4 p-2
        flex flex-col justify-center relative  
        overflow-hidden shadow-standard 
        rounded-bl-[65px] rounded-br-[65px]
        bg-white
        sm:justify-center md:mb-0  lg:justify-self-center lg:mb-[5.5rem]
        '
        >
          {/* Avatar BG Halfcircle */}
          <div
            className='
          p-0 
          flex justify-center'
          >
            <div
              className='
            w-[100%] h-[13em] 
            flex justify-center absolute -top-4 
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
            w-[12em] h-[12em] mt-[-2rem] 
            absolute z-10 
            rounded-full'
              src={imageAccount}
            />
          </div>

          {/* User Name-, and Section */}
          <div className='mt-[5em]'>
            <h1
              className='
              flex justify-center 
              font-[700] text-[2.5rem]
              '
            >
              Viktoria Schulz
            </h1>
            <h2
              className='
              mb-6 
              flex justify-center 
              text-[1.8rem] font-light'
            >
              Web-Developer
            </h2>
          </div>

          {/* Description Heading and Description */}
          <div className='pl-9 pr-9'>
            <h3 className='mb-1 text-[16px] font-[600]'>Description</h3>
            <p className='text-[15px] text-[gray]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ob caecati harum omnis sapiente eum illo ratione sunt dignissimos dolorem animi delectus sit voluptatem aperiam maxime provident natus, totam consequuntur pariatur suscipit.
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
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdMail/> email@email.com</div>
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdCall/> 0761/384059234</div>
            <div className='flex flex-row gap-4 items-center text-gray leading-relaxed'> <MdLocationOn/> 79111 Freiburg</div>
          </div>

          {/* Edit Profile Button Wrapper */}
          <div
            className='flex justify-center'
          >
            <UniButton
            area-label='EditProfileButton'
            text= 'Edit Profile'
            />
          </div>
        </div>

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div className='m-4 lg:justify-self-center lg:min-w-[470px]'>
          <p className='min-w-[850px]:absolute mt-8 mb-4 text-center hidden md:mt-0'>
            You have no Ads yet
          </p>
          <div className='w-[100%] flex justify-evenly gap-6'>
            <button
              className='py-2 border-2 rounded-3xl border-lightGreen  basis-1/2 bg-white'
              onClick={handleClick}
            >
              Post Ad
            </button>
            <button
              className='py-2 border-2 rounded-3xl bg-lightGreen text-white basis-1/2'
              onClick={handleClick}
            >
              Browse Jobs
            </button>
          </div>

        {/* Horizontal Line */}
        <div
        area-label='line'
        className='w-[20%] hidden md:block md:absolute md:top-[13%] md:translate-y-[-50%] md:right-0 md:border-b-[3px] md:border-lightGreen'
        />

        {/* List Box Container */}
        <div className='flex justify-start flex-col'>
          <h3 className='text-lg font-semibold text-gray'>Your Ads</h3>

        {/* Ads Container */}
        <div className='mt-[30px] w-full h-full flex flex-wrap p-10 justify-items-center items-start rounded-[21px] bg-white shadow-standard  sm:px-5 sm:overflow-y-scroll'>
          {/* Ads */}
          <div className='mx-auto flex flex-wrap justify-center '>
            {ads.list.map((ad) => (
              <Ad key={ad._id} ad={ad} />
            ))}
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Account
