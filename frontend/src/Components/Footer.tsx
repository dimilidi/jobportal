import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className=' mx-auto flex justify-center align-middle'>
       <div className='bg-darkBeige fixed bottom-0 z-10 rounded-t-[40rem] p-4  w-4/5'>
      <p className="text-l text-center text-gray text-opacity-30 font-light"> &copy; 2022 All rigths reserved <span className='font-bold'> Jobsy.</span></p>
    </div>
    </div>
   
  )
}

export default Footer