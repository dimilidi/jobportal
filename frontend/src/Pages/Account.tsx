import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

type Props = {}

const handleClick = async () => {
  alert(`Click`)
}

const Account = (props: Props) => {
  return (
    <>
      {/* Grid Container For Whole Page */}
      <div
        className=' 
      mb-[4rem]
      pt-[70px]
      md:pt-[100px]
      w-[100%] md:h-[90vh]
      grid
      bg-background
      sm:grid-cols-1 md:grid-cols-2

      '
      >
        {/* User Card Container */}
        <div
          className='
        max-w-[450px] m-4 p-2
        flex flex-col justify-center relative  
        overflow-hidden 
        border rounded-bl-[65px] rounded-br-[65px]
        bg-white
        sm:justify-center md:mb-0  lg:justify-self-center lg:mb-[5.5rem]
        '
        >
          {/* Avatar BG Halfcircle */}
          <div
            className='
          p-0 
          flex justify-center'
          >
            <div
              className='
            w-[100%] h-[8em] 
            flex justify-center absolute -top-4 
            rounded-bl-full rounded-br-full
          bg-lightGreen '
            ></div>
          </div>
          {/* .................... */}

          {/* Avatar Circle Container */}
          <div
            className='
          w-[100%] h-[6em] 
          flex justify-center
          '
          >
            <img
              className='
            w-[8em] h-[8em] mt-6 
            absolute z-10 
            border rounded-full 
            bg-lightBeige'
              src=''
              alt='User Avatar'
            />
          </div>

          {/* User Name-, and Section */}
          <div className='mt-[4em] mx-1'>
            <h1
              className='
              flex justify-center 
              font-[700] text-[30px]
              '
            >
              Viktoria Schulz
            </h1>
            <h2
              className='
              mb-6 
              flex justify-center 
              text-[16px]'
            >
              Web-Developer
            </h2>
          </div>

          {/* Description Heading and Description */}
          <div className='min-[374px]:mx-[1em]'>
            <h3 className='mb-1 text-[16px] font-[600]'>Description</h3>
            <p className='text-[15px] text-[gray]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati harum omnis sapiente eum illo ratione sunt dignissimos
              dolorem animi delectus sit voluptatem aperiam maxime provident
              natus, totam consequuntur pariatur suscipit?
            </p>
          </div>

          {/* Contact Data */}
          <div
            className='
          my-6 
          text-[15px] font-[800] 
          min-[374px]:mx-[1em]'
          >
            <div className=''>email@email.com</div>
            <div className=''>0761/384059234</div>
            <div className=''>79111 Freiburg</div>
          </div>

          {/* Edit Profile Button Wrapper */}
          <div
            className='
          mb-4 
          flex justify-center'
          >
            <button>Edit Profile</button>
          </div>
        </div>

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div className='m-4 lg:justify-self-center lg:min-w-[470px]'>
          <p className='min-w-[850px]:absolute mt-8 mb-4 text-center hidden md:mt-0'>
            You have no Ads yet
          </p>
          <div className='w-[100%] flex justify-evenly'>
            <button
              className='py-2 border-2 rounded-3xl border-lightGreen basis-1/2'
              onClick={handleClick}
            >
              Post Ad
            </button>
            <button
              className='py-2 border-2 rounded-3xl bg-lightGreen text-white basis-1/2'
              onClick={handleClick}
            >
              Browse Jobs
            </button>
          </div>

          {/* Horizontal Line */}
          <hr className='my-6' />

          {/* List Box Container */}
          <div className=''>
            <h3 className='mb-2 text-center text-lg font-semibold'>Your Ads</h3>
            <ul className='p-2 m-2 mb-10 border rounded-xl'>
              <li className='mb-4'>Ad 1</li>
              <li className='mb-4'>Ad 2</li>
              <li className='mb-4'>Ad 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
