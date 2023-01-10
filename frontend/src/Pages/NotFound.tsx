import { useNavigate } from 'react-router-dom'
//Components
import UniButton from '../Components/UniButton'
// framer-motion
import {motion} from 'framer-motion'

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
      className='h-screen flex flex-col justify-center items-center gap-2'>
      <h2 className='text-[6rem]'>404</h2>
      <p>Page not found</p>
      <UniButton text='Back' onClick={handleClick} />
    </motion.div>
  )
}

export default NotFound
