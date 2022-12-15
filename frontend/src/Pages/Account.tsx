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
      <div className=' 
      w-[100%]  
      grid 
      bg-background 
      sm:grid-cols-1 md:grid-cols-2
      '>

        {/* User Card Container */}
        <div className='
        m-4 p-2 max-w-[450px]
        flex flex-col justify-center relative  
        overflow-hidden 
        border rounded-bl-[65px] rounded-br-[65px]
        bg-white
        sm:justify-center  
        '>

          {/* Avatar BG Halfcircle */}
          <div className='
          p-0 
          flex justify-center'>
            <div className='
            w-[100%] h-[8em] 
            flex justify-center absolute -top-4 
            rounded-bl-full rounded-br-full
          bg-lightGreen '>
            </div>
          </div>
          {/* .................... */}

          {/* Avatar Circle Container */}
          <div className='
          w-[100%] h-[6em] 
          flex justify-center
          '>
            <img className='
            w-[8em] h-[8em] mt-6 
            absolute z-10 
            border rounded-full 
            bg-lightBeige' 
            src="" alt="User Avatar" />
          </div>

          {/* User Name-, and Section */}
          <div className='mt-[4em] mx-1'>
              <h1 className='
              flex justify-center 
              font-[700] text-[30px]
              '>
                Viktoria Schulz
              </h1>
              <h2 className='
              mb-6 
              flex justify-center 
              text-[16px]'>
                Web-Developer
              </h2>
          </div>    

          {/* Description Heading and Description */}
          <div className='min-[374px]:mx-[1em]'>
            <h3 className='mb-1 text-[16px] font-[600]'>Description</h3>
            <p className='text-[15px] text-[gray]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum omnis sapiente eum illo ratione sunt dignissimos dolorem animi delectus sit voluptatem aperiam maxime provident natus, totam consequuntur pariatur suscipit?
            </p>
          </div>

          {/* Contact Data */}
          <div className='
          my-6 
          text-[15px] font-[800] 
          min-[374px]:mx-[1em]'>
            <div className=''>email@email.com</div>
            <div className=''>0761/384059234</div>
            <div className=''>79111 Freiburg</div>
          </div>

          {/* Edit Profile Button Wrapper */}
          <div className='
          mb-4 
          flex justify-center'>
            <button>Edit Profile</button>
          </div>

        </div>

        {/* ############################################# */}

        {/* You Have No Ads Yet  */}
        {/* Post-Ad-Button + Browse-Jobs-Button Container */}
        <div className='
        m-4'>
          <p className='
          mt-8 mb-4  
          text-center 
          min-w-[850px]:absolute'>
            You have no Ads yet
          </p> 
          <div className='
          mb-8 mx-6 
          flex justify-around'>
            <button className='' onClick={handleClick}>Post Ads</button>
            <button className='' onClick={handleClick}>Browse Jobs</button>
          </div>
        </div>
          
        {/* Horizontal Line Mobile Version */}
        <hr className='
        my-6 
        md:hidden' />

        {/* Your Ads: List Container*/}
        <div className='
        h-[600px] 
        m-[4em]'>
          <h4 className='
          my-2 
          text-center'>
            Your Ads
          </h4>
          <ul className=''>
            <li>Ad 1</li>
            <li>Ad 2</li>
            <li>Ad 3</li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Account