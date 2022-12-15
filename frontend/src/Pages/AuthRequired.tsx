import React from 'react'
import {BiArrowToLeft} from 'react-icons/bi'

type Props = {}

const AuthRequired = (props: Props) => {
  return (
    <section className='w-[90%] h-[60%] my-0 mx-auto  pr-2' >

      {/* ICON PREVIOUS PAGE */}
      <div>
        <BiArrowToLeft size={22}/>
      </div>
      {/* ICON PREVIOUS PAGE END */}



      {/* MAIN CONTAINER */}
      <div className='  bg-white'>
        <h1 className='font-size-[40]'>Be part of our  <span className='italic text-lightGreen font-semibold'>Mission</span></h1>
      </div>
      {/* MAIN CONTAINER END */}



    </section>
  )
}

export default AuthRequired