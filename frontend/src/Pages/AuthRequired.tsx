// Hooks
import { useNavigate } from 'react-router-dom'
import useDecorationLine from '../Hooks/useDecorationLine'

// Components
import UniButton from '../Components/UniButton'
import UniButtonWhite from '../Components/UniButtonWhite'
import BrowseJobs from '../Components/BrowseJobs'
// framer-motion
import {motion} from 'framer-motion'
// Images
import DeliveryGuy from '../assets/images/AuthRequired_delivery_guy.png'

const AuthRequired = () => {
  const navigate = useNavigate()
  const missionText = useDecorationLine({ orientation: 'right'})


  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToRegister() {
    navigate('/register')
  }

  return (
    <motion.section
    initial={{ width: '100%'}}
    animate={ {width: '100%'}}
    exit={{x:window.innerWidth}} 
   >
      <div className='pb-20 pt-[60px] md:pt-[120px] xl:pt-[150px] mx-auto pr-2 w-[90%] h-full flex justify-center flex-col items-center sm:w-[60%] lg:w-[50%]'>

      
      {/* ICON & BROWSE JOBS */}
      <div className='w-full flex p-5'>
        <BrowseJobs />
      </div>
      {/* ICON & BROWSE JOBS END */}

      {/* MAIN CONTAINER */}
      <div
        className='bg-white p-10 pb-40
      flex justify-center items-center flex-col 
      rounded-xl shadow-standard 
      md:w-[400] md:px-16 '
      >
        <h1 className=' text-4xl md:text-5xl font-semibold'>
          Be part of <br /> our{' '}
          <span 
          ref={missionText}
          className='italic text-lightGreen font-semibold'>Mission</span>
        </h1>

        <div className=' w-[80%] text-center mt-8 opacity-50'>
          <p>Please login to see more information</p>
        </div>

        <UniButton text='Login' onClick={navigateToLogin} className='my-5 ' />

        <UniButtonWhite text='Sign up' onClick={navigateToRegister} />

        {/* ELEMENTS */}
        {/* Circle */}
        <div
          area-label='circle'
          className='w-[50px] h-24 hidden 
                right-[0rem] xl:top-[300px]  lg:top-[270px]  
                rounded-tl-full rounded-bl-full bg-lightGreen 
                lg:block absolute'
        ></div>
        {/* ELEMENTS END*/}

        {/* IMAGES */}
        <div>
          <img
            src={DeliveryGuy}
            alt='postman'
            className='scale-x-[-1] absolute -left-12 
                sm:top-[460px] sm:left-4 max-h-96 overflow-hidden 
                md:max-h-full  md:top-[360px] md:-left-4 
                lg:left-32 lg:top-[300px] 
                xl:left-56 xl:top-[260px] 
                2xl:left-96  '
          />
        </div>
        {/* IMAGES END */}
      </div>
      {/* MAIN CONTAINER END */}
      </div>
    </motion.section>
  )
}

export default AuthRequired
