import React from 'react'

type Props = {}

const BigCircle = (props: Props) => {
  return (
    <div
      area-label='circle'
      className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:fixed lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen'
    />
  )
}

export default BigCircle
