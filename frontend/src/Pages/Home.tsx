import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import imageHome from '../assets/images/Home_group.png'

type Props = {}

const Home = (props: Props) => {
  return (
    <div >
      <div className='h-full min-h-[915px] w-full flex flex-col items-center justify-center lg:w-[1400px] lg:flex-row lg:justify-between mx-auto'>
        {/* TEXT LEFT */}
        <div className='flex flex-col items-center justify-center gap-6'>
          <h1 className='text-5xl font-medium text-textBlack md:text-7xl lg:text-8xl'>
            Build your <br></br>
            <span className='italic font-medium text-darkGreen'>Future.</span>
            Build <br></br> Your
            <span className='italic font-medium text-lightGreen'>Dream.</span>
          </h1>
          <p className='hidden font-light text-gray lg:inline-block'>
            Lorem Ipsum is simply dummy text of the has been the industry's
            standard<br></br> dummy text Ipsum is simply dummy is simply dummy
            text of the has been.
          </p>

          {/* SEARCH ohne funktionalität */}
          <div className='mt-6 flex flex-col items-center justify-center gap-1 md:mt-10 lg:mt-6'>
            <div className='flex items-center justify-center'>
              <label className='relative'>
                <GoSearch className='w-[20px] absolute top-3.5 left-5 text-gray text-opacity-50 md:top-3 lg:top-4' />
                <input
                  type='text'
                  className='h-[40px] w-[250px] text-center rounded-full bg-darkBeige placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray lg:h-[50px] md:w-[350px] lg:w-[550px]'
                  placeholder='Search'
                />
              </label>
            </div>

            {/* Browser Ads button */}
            <button className='h-[40px] w-[250px] mt-2 rounded-full bg-lightGreen text-background md:w-[350px] lg:mt-3'>
              <NavLink to={'/adslist'}>Browser Ads</NavLink>
            </button>
          </div>
        </div>

        {/* IMAGE right/botton */}
   
           <img
          className='w-[350px] mt-10 z-30 lg:w-[650px] lg:mt-0'
          src={imageHome}
           ></img>
      
       
      </div>

      {/* elemente (kreis-linie) */}
      <div>
        <div
          area-label='left line'
          className='w-[53%] block absolute z-10 left-0 top-[16.5rem] border-b-[2px] border-lightGreen lg:w-[35%] md:w-[53%] md:top-[20.5rem] lg:top-[31.5rem] lg:border-b-[4px]'
        ></div>
        <div
          area-label='right line'
          className='w-[54%] block absolute z-10 top-[19.5rem] right-0 border-b-[2px] border-lightGreen lg:w-[69%] md:w-[54%] md:top-[25rem] lg:top-[37.5rem] lg:border-b-[4px]'
        ></div>
        <div
          area-label='circle'
          className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:absolute lg:top-[57%] lg:right-[-250px] lg:translate-y-[-50%] lg:rounded-full md:bg-lightGreen'
        ></div>
      </div>
    </div>
  )
}

export default Home
