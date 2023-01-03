
import React, { useEffect } from 'react'
import {BiArrowToLeft} from 'react-icons/bi'
import { useNavigate, useLocation} from "react-router-dom";
import UniButton from '../Components/UniButton';
import DeliveryGuy from '../assets/images/AuthRequired_delivery_guy.png'


type Props = {}

const AuthRequired = (props: Props) => {
  const navigate = useNavigate();

  function handleBrowseJobs() {
   navigate('/adsList')
  }

  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToRegister() {
    navigate('/register')
  }

   
  return (
    <section className='w-[90%] h-[100vh] my-0 mx-auto  pr-2  md:pt-[0] flex justify-center flex-col items-center' >

      {/* ICON & BROWSE JOBS */}
      <div className='mb-2 flex w-full'
      onClick={handleBrowseJobs}>
        <BiArrowToLeft size={24}/>
        <span className='text-l'>Browse Jobs</span>
      </div>
      {/* ICON & BROWSE JOBS END */}



      {/* MAIN CONTAINER */}
      <div className='  bg-white p-10 pb-40 md:px-16 flex justify-center items-center flex-col rounded-xl shadow-standard md:w-[400]' >
        <h1 className=' text-4xl md:text-5xl'>Be part of <br /> our  <span className='italic text-lightGreen font-semibold'>Mission</span></h1>

        <div className=' w-[80%] text-center mt-8'>
          <p>Please login to see more information</p>
        </div>

        <UniButton
              text='Login'
              onClick={navigateToLogin}
              className='my-5 '
            />

        <UniButton
              text='Sign up'
              onClick={navigateToRegister}
              className='  bg-white text-lightGreen border-lightGreen'
            />

            {/* ELEMENTS */}
            {/* Line */}
            <div 
              area-label='line'
              className='w-[52%] min-w-[240px] border-b-[3px] border-lightGreen sm:block absolute top-[320px] sm:top-[330px] right-0' />
            {/* Circle */}
            <div 
              area-label='circle'
              className='w-24 h-24 hidden right-[-3rem] top-[280px]  rounded-full bg-lightGreen lg:block absolute'></div>
            {/* ELEMENTS END*/}


        {/* IMAGES */}
        <div >
              <img src={DeliveryGuy} alt="postman" 
              className='scale-x-[-1] absolute -left-12 top-[520px] max-h-96 overflow-hidden sm:max-h-full md:top-64 md:left-2 lg:left-50 xl:left-[400px]  ' />
            </div>

            {/* IMAGES END */}

          

      </div>
      {/* MAIN CONTAINER END */}



    </section>
  )
}

export default AuthRequired