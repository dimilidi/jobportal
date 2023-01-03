import { useNavigate } from 'react-router-dom'
import UniButton from '../Components/UniButton'
import imageAccount from '../assets/images/Account_profilDefault.png'
import { MdMail , MdCall, MdLocationOn} from "react-icons/md"
import Ad from '../Components/Ad'
import useAds from '../Hooks/useAds'
import UniButtonWhite from '../Components/UniButtonWhite'

type Props = {}

const Account = (props: Props) => {
  const navigate = useNavigate()
  const ads = useAds()
  return (
    <>
      {/* Grid Container For Whole Page */}
      <div
        className='w-[70%] h-full min-h-[900px]
          mx-auto flex flex-col
          items-center justify-center gap-8
          md:flex-col lg:flex-row'
      >

      {/* User Card Container */}
      <div
          className='mt-[30%]
            min-w-[375px]
            max-w-[450px]
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
            className='flex justify-center mb-10'
          >
            <UniButton
            area-label='EditProfileButton'
            text= 'Edit Profile'
            type='button'
            className='sm:w-[45%] md:w-[55%] lg:w-[30%] xl:w-[50%]'
            />
          </div>
        </div>

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div
          className='m-6
            flex flex-col justify-center
            lg:min-w-[470px]'>
        {/* Line - Circle*/}
            {/* Line */}
             <div
              className='w-[35%] min-w-[220px]
                border-b-[3px] border-lightGreen
                absolute hidden
                md:top-[230px]
                lg:block lg:top-[250px] lg:right-0
                xl:block xl:top-[290px] ' />
            {/* Semicircle */}
             <div
              className='w-24 h-24
                hidden absolute
                right-[-3rem] top-[210px]
                rounded-full bg-lightGreen
                md:hidden
                lg:block lg:top-[180px]
                xl:top-[240px]'>
             </div>

          {/* <p className='min-w-[850px]:absolute mb-4 text-center font-semibold text-lg md: md:mt-0 lg:hidden'>
            You have no Ads yet
          </p> */}

        {/* Post-Ad-Button + Browse-Jobs-Button */}
          <div
            className='w-[100%]
              flex flex-row justify-center gap-10
              sm:justify-center lg:justify-start'>

          <UniButtonWhite
            text='Post Ad'
            type='button'
            className='z-10 sm:w-[80%] lg:w-[50%] xl:w-[35%]'
            onClick={() => navigate('/post-ad')}
          />

          <UniButton
            text='Browse Ads'
            type='button'
            className='z-10 sm:w-[80%] lg:w-[50%] xl:w-[35%]'
            onClick={() => navigate('/adslist')}
          />
          </div>

          {/* Ads Container */}
          <div
            className='
            w-[750px]
            mt-10 p-10 mb-10
            flex flex-col justify-center
            rounded-[21px]
            lg:bg-white lg:shadow-standard
            sm:px-0
            md:shadow-none md:bg-background'>

          {/* Your Ads */}
          <h3
            className='mb-8 
            text-lg font-semibold
            text-gray text-center'>Your Ads</h3>

          {/* Ads */}
          <div className='mx-auto flex flex-wrap justify-center '>
            {ads.list.map((ad) => (
              <Ad key={ad._id} ad={ad} />
            ))}
          </div>
          </div>
          </div>
      </div>
    </>
      )
    }
    
    export default Account
