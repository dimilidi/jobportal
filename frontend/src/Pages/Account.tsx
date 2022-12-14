import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  

}

const handleClick = async () => {
  alert(`Click`)
} 

const Account = (props: Props) => {
  return (
    <>
      {/* Container For Whole Page */}
      <div className='bg-background w-[100%]'>

        {/* User Card Container */}
        <div className='relative max-w-[380px] m-4 p-2 border rounded-bl-[65px] rounded-br-[65px] bg-white overflow-hidden'>

          {/* Avatar BG Halfcircle */}
          <div className='flex justify-center p-0'>
            <div className='w-[100%] h-[8em] absolute -top-4 flex justify-center bg-lightGreen rounded-bl-full rounded-br-full '>
            </div>
          </div>
          {/* .................... */}

          {/* Avatar Circle Container */}
          <div className='h-[6em] w-[100%] flex justify-center'>
            <img className='absolute z-10 mt-6 h-[8em] w-[8em] border rounded-full bg-lightBeige' src="" alt="User Avatar" />
          </div>

          {/* User Name-, and Section */}
          <div className='mx-1 mt-[4em]'>
              <h1 className='font-[700] text-[30px] flex justify-center'>Viktoria Schulz</h1>
              <h2 className='mb-6 flex justify-center text-[16px]'>Web-Developer</h2>
          </div>    

          {/* Description Heading and Description */}
          <div className='min-[374px]:mx-[1em]'>
            <h3 className='text-[16px] font-[600] mb-1'>Description</h3>
            <p className='text-[15px] text-[gray]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum omnis sapiente eum illo ratione sunt dignissimos dolorem animi delectus sit voluptatem aperiam maxime provident natus, totam consequuntur pariatur suscipit?
            </p>
          </div>

          {/* Contact Data */}
          <div className='min-[374px]:mx-[1em] my-6 text-[15px] font-[800]'>
            <div className=''>email@email.com</div>
            <div className=''>0761/384059234</div>
            <div className=''>79111 Freiburg</div>
          </div>

          {/* Edit Profile Button Wrapper */}
          <div className='flex justify-center mb-4'>
            <button>Edit Profile</button>
          </div>

        </div>


          
        <p className='mt-8 mb-4 text-center'>You have no Ads yet</p> 
          
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div className='flex justify-around mx-6 mb-8'>
          <button className='' onClick={handleClick}>Post Ads</button>
          <button className='' onClick={handleClick}>Browse Jobs</button>
        </div>

        <hr className='my-6' />

        {/* Your Ads List */}
        <h4 className='text-center my-2'>Your Ads</h4>
        <ul className='min-h-[400px]'>
          <li>Ad 1</li>
          <li>Ad 2</li>
          <li>Ad 3</li>
        </ul>
      </div>
    </>
  )
}

export default Account