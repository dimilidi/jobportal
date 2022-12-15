import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoSearch } from "react-icons/go";

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className='mt-[5rem] flex flex-col items-center justify-center md:mt-[5rem] lg:mt-[15rem] md:flex-col lg:flex-row'>

  {/* TEXT LEFT */}
        <div className='flex flex-col items-center justify-center gap-6 lg:mr-40'>
          <h1 className='text-5xl font-medium text-textBlack md:text-7xl lg:text-8xl'>Build your <br></br>
          <span className='italic font-medium text-darkGreen'>Future.</span> 
          Build <br></br> Your 
          <span className='italic font-medium text-lightGreen'>Dream.</span>
          </h1>
          <p className='hidden font-light text-gray lg:inline-block'>Lorem Ipsum is simply dummy text of the has been the industry's standard<br></br> dummy text Ipsum is simply dummy is simply dummy text of the has been.</p>
          
  {/* SEARCH ohne funktionalität */}
        <div className='mt-10 flex flex-col items-center justify-center gap-1 md:mt-10 lg:mt-6'>
          <div className='flex items-center justify-center'>
            <label className='relative'>
              <GoSearch className='w-[20px] absolute top-3.5 left-5 text-gray text-opacity-50 md:top-3 lg:top-4'/>
              <input type='text'
                      className='h-[40px] w-[250px] text-center rounded-full bg-darkBeige placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray lg:h-[50px] md:w-[350px] lg:w-[550px]' placeholder='Search'/>
            </label>
          </div>

    {/* Browser Ads button */}
          <button className='h-[40px] w-[250px] mt-2 rounded-full bg-lightGreen text-background md:w-[350px] lg:mt-3'>
            <NavLink to={'/adslist'}>Browser Ads</NavLink>
          </button>
        </div>
        </div>

  {/* IMAGE right/botton */}
          <img className='w-[300px] h-[250px] mt-20 z-30 bg-darkGreen lg:w-[500px] lg:h-[400px]' src="https:/"></img>
      </div>


  {/* elemente (kreis-linie) */}
        <div>
          <div className='w-[53%] absolute z-10 left-0 top-[12.5rem] border-b-[3px] border-lightGreen lg:w-[29%] md:top-[15.5rem] lg:top-[28.5rem]'></div>
          <div className='w-[56%] absolute z-10 top-[15.5rem] right-0 border-b-[3px] border-lightGreen lg:w-[76%] md:top-[20rem] lg:top-[34.5rem]'></div>
          <div className='w-24 h-48 hidden absolute top-[28.5rem] right-0 rounded-tl-full rounded-bl-full bg-lightGreen lg:inline-block'></div>
        </div>
    </div>
  )
}

export default Home