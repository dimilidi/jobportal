// Hooks
import { useNavigate, useParams } from 'react-router-dom'
import useUser from '../Hooks/useUser'
// Components
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
// Libraries
import 'react-toastify/dist/ReactToastify.css'
// Framer-motion
import { motion } from 'framer-motion'
import UserMessage from '../Components/UserMessage'

 const Message = () => {
  const user = useUser().user
  const navigate = useNavigate()
  return (
    <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
        area-label='message'
        className='lg:pt-[120px] pb-20 w-[95%] h-full  min-h-[700px] lg:min-h-[900px] flex flex-col items-center justify-center text-textBlack md:pt-[140px] xl:pt-[120px]'
      >
        {/* MAIN */}
        <div
          area-label='main'
          className='w-[95%] sm:max-w-[900px] h-full
          flex flex-col justify-start
          sm:w-[80%]
          md:min-h-[650px]md:w-[70%]
          lg:w-[50%] 
          xl:w-[800px] xl:min-h-full'
        >

        {/* BOX*/}
        <div
            area-label='box'
            className='w-full px-2 sm:px-5 sm:mx-0 mx-2 min-h-[500px] sm:h-[400px] sm:w-[400px] xl:w-[800px] xl:h-[600px]
            flex flex-col justify-between item-center
            self-center z-10 rounded-[21px] bg-white shadow-standard'
          >

        {/* USER-MESSAGE*/}
          <div 
            aria-label='UserMessage'
            className='h-full w-full
              relative flex justify-center '>
            <UserMessage/>
          </div>

          {/* BUTTON - SEND */}
          <div
          className='flex justify-center items-center mb-10'>
          <UniButton
               area-label='SendMessageButton'
               text='Send'
               type='button'
              //  onClick={}
               />
          </div>
          {/* BUTTON - SEND - END*/}


          </div>
          {/* BOX - END*/}

        {/* CIRCLE & LINE */}
        <div
            area-label='circle'
            className='hidden 
          w-[332px] h-[332px] absolute lg:top-[470px] lg:left-[-230px] lg:translate-y-[-50%] lg:rounded-full  lg:bg-lightGreen z-0
          md:block'
          />

          <div
            area-label='line'
            className='hidden md:block lg:absolute lg:top-[475px] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen z-0'
          />
          {/* CIRCLE & LINE - END */}


        </div>
        {/* CIRCLE & LINE - END */}
    </motion.div>
  )
}

export default Message