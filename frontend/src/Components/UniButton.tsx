// Animation
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  text: string | ReactNode
  style?: {}
  type?: string
  fontSize?: string
  width?: string
  height?: string
  className?: string
  onClick?: () => void
}

const UniButton = ( props: Props ) => {
  return (
    <div className={ props.className }>
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={props.onClick}
        className='w-[140px] flex items-center justify-center rounded-full bg-lightGreen border-lightGreen border-[2.5px] text-white hover:bg-darkGreen hover:border-darkGreen ease-in-out duration-300 px-[24px] py-[12px] fontSize-[16px] shadow-md md:w-[250px]'
        style={props.style}
      >
        {props.text}
      </motion.button>
    </div>
  )
}

export default UniButton
