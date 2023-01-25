// Images & Icons
import imageHome from '../assets/images/Home_group.png'
// framer-motion
import { motion } from 'framer-motion'

import useDecorationLine from '../Hooks/useDecorationLine'
import SearchContainer from '../Components/SearchContainer'

const Home = () => {
  // DECORATION LINE
  const futureText = useDecorationLine({ orientation: 'left' })
  const dreamText = useDecorationLine({ orientation: 'right' })

  return (
    <motion.div
      // initial={{ width: '100%' }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth }}
      className='mx-auto md:w-[90%] w-full h-full min-h-[918px] flex justify-center items-center lg:justify-end'
    >
      <div
        className='py-8 h-full w-[100%] mx-auto 
          sm:w-[50%] flex flex-col items-center justify-around gap-10
          lg:ml-[85px] lg:gap-0  md:w-full lg:flex-row lg:justify-start
          md:flex-wrap md:justify-center md:items-center'>
        {/* TEXT */}
        <div className='w-full flex flex-col items-center justify-center gap-6 md:w-[70%] lg:w-[50%]  '>
          <h1 className='text-[45px] leading-none font-medium text-textBlack sm:text-[53px] lg-text-7 xl:text-[80px] md:text-6xl '>
            Build your <br></br>
            <span
              ref={futureText}
              className='italic font-medium text-darkGreen'
            >
              Future.{' '}
            </span>
            Build <br />
            Your
            <span
              className='italic font-medium text-lightGreen'
              ref={dreamText}
            >
              {' '}
              Dream.
            </span>
          </h1>
          <p className='w-[70%] h-[80px] hidden font-light text-gray break-words lg:max-w-[350px] xl:max-w-[450px] xl:text-lg xl:pt-2 lg:inline-block'>
          Freedom is finding the right job. Don't wait to be found - apply now! Find suitable job today!
          </p>
        </div>

        {/* IMAGE */}

        <img
          className='w-[80%] max-w-[250px] z-30 xl:max-w-[500px]  
          lg:max-w-[370px] lg:mb-[-100px] lg:ml-2 '
          src={imageHome}
        ></img>

        {/* SEARCH */}
        <SearchContainer page='Home' />
      </div>

      {/* CIRCLE */}

      <div
        area-label='circle'
        className='hidden xl:block w-[332px] h-[332px]
        absolute top-[465px] right-[-250px] translate-y-[-50%] rounded-full md:bg-lightGreen'
      />
    </motion.div>
  )
}

export default Home
