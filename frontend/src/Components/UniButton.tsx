type Props = {
  text: string
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
      <button
        onClick={props.onClick}
        className=' w-[100%] flex items-center justify-center rounded-full bg-lightGreen text-white  hover:bg-darkGreen  ease-in-out duration-300 px-[24px] py-[12px] fontSize-[16px] shadow-lg'
        // className='w-[100%] flex items-center justify-center rounded-full bg-lightGreen text-white h-[40px] hover:bg-darkGreen  ease-in-out duration-300 md:w-[230px] px-[24px] py-[12px] fontSize-[16px]'
        style={{
          fontSize: props.fontSize,
          width: props.width,
          height: props.height,
        }}
      >
        {props.text}
      </button>
    </div>
  )
}

export default UniButton
