import React from 'react'
import Ad from '../Components/Ad'

type Props = {}

const AdsList = (props: Props) => {
  return (
    <> 
    <div className='h-[250px]'></div>
    <div className=' w-[100%]  mx-auto flex justify-center items-start gap-10  ' >

          {/* Heading with underline  */}
      <div className='mt-20 fixed top-[72px] right-0 w-full'>
        <h2 className='text-5xl w-[260px] mx-auto'>
          Be part of 
          <p>our
            <span className='static capitalize  text-lightGreen text-5xl' > mission
            </span>
          </p> 
        </h2>
        <div className='fixed top-[250px] right-0  w-[52%] min-w-[220px] border-b-[3px] border-lightGreen '></div>
      </div>

     
      
      {/* Semicircle */}
      <div className='hidden lg:block fixed  right-[-3rem] top-[200px]  w-24 h-24 rounded-full bg-lightGreen'></div>

      {/* Image */}
      <div className='hidden 2xl:flex w-[500px] h-[500px]  bg-blue-200'></div>


      <div className='flex flex-wrap justify-items-center items-start space-x-14 w-[100%] lg:w-[800px]  md:w-[700px] md:max-h-[530px] h-[850px]  overflow-y-scroll '>

       

        {/* Ads */}
        <div className='h-full w-full flex flex-wrap justify-center  '>
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
          <Ad />
        </div>

      </div>

     
    </div>
  
    </>
  
  )
}

export default AdsList