import { useNavigate } from 'react-router-dom'
//Components
import UniButton from '../Components/UniButton'
// framer-motion
import {motion} from 'framer-motion'
// Image
import ErrorImg from '../assets/images/ErrorOne.png'

type Props = {}

const NotFound = (props: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <motion.div
      initial={{ width: '100%'}}
      animate={{ width: '100%'}}
      exit={{ x:window.innerWidth }}
      className='h-screen flex justify-center md:justify-end items-center gap-2'>

      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
        {/* IMAGE */}
        <img
          aria-label='404Image'
          className='w-[250px] lg:w-[400px] relative'
          src={ErrorImg}
        />
        {/* INFO */}
        <div
          className='flex lg:flex-col justify-start items-start
          lg:w-[500px] xl:w-[800px] 2xl:w-[1000px] md:w-[400px]
          md:h-[300px] h-[160px] bg-darkBeige
          rounded-[30px]
          md:rounded-l-[30px] md:rounded-r-[0] relative
          '>
          <div
            className='flex flex-col justify-center
            items-center md:pl-[8%]'>
            <h2
              className='md:text-[8rem]
                text-[4rem]
                font-bold text-gray
                '>
              404
            </h2>
            <p className='font-bold mt-[-20px] mb-3 text-gray opacity-50'>Page not found</p>
            <UniButton
            className='md:mb-9'
              text='Back'
              onClick={handleClick} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound
