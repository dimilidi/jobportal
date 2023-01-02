import React from 'react'

type Props = {}

const Line = (props: Props) => {
  return (
    <div
      area-label='line'
      className='hidden lg:block lg:fixed lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
    />
  )
}

export default Line
