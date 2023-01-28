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

const UniButtonDark = ( props: Props ) => {
  return (
    <div className={ props.className }>
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={props.onClick}
        className='
        min-[600px]:w-[250px]
        w-[140px] px-[24px] py-[12px] 
        flex items-center justify-center
        font-small text-[.9em] fontSize-[16px] text-white bg-darkGreen
        border-[2.5px] rounded-full  border-darkGreen shadow-inner
        hover:border-darkGreen2 hover:bg-darkGreen2 
        ease-in-out duration-300'
        style={props.style}
      >
        {props.text}
      </motion.button>
    </div>
  )
}

export default UniButtonDark