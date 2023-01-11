import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Backdrop from './Backdrop'

type Props = {
    handleClose: () => void
    children: any
}

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    },
}

function Modal({ handleClose, children }: Props) {

    const params = useParams()
    
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className='mx-auto px-[2rem] max-w-[600px] w-[70%] h-[300px] flex flex-col items-center justify-center gap-10 rounded-xl border-lightGreen border-[5px] text-lg text-center text-textBlack bg-lightBeige sm:text-xl'
            variants={ dropIn }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {children}
        </motion.div>

    </Backdrop>
  )
}

export default Modal