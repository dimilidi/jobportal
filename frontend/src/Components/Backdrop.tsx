import { motion } from 'framer-motion'

type Props = {
    onClick: () => void
    children: any
}

function Backdrop({ children, onClick }: Props) {
  return (
    <motion.div
        className='h-full w-full absolute top-0 left-0 z-[50] flex items-center justify-center bg-[#000000e1]'
        onClick={onClick}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop