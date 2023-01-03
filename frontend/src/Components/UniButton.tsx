// Animation
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  text: string | ReactNode
  style?:{}
  type?: string
  onClick?: () => void
  fontSize?: string
  width?: string
  height?: string
  className?: string
}

const UniButton = (props: Props) => {
  return (
    <div className={props.className}>
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        onClick={props.onClick}
        className='w-[100%] flex items-center justify-center rounded-full bg-lightGreen text-white hover:bg-darkGreen  ease-in-out duration-300 px-[24px] py-[12px] fontSize-[16px] shadow-lg'
        // style={{
        //   fontSize: props.fontSize,
        //   width: props.width,
        //   height: props.height,
        //   color:props.color
        // }}
        style={props.style}
      >
        {props.text}
      </motion.button>
    </div>
  )
}

export default UniButton
