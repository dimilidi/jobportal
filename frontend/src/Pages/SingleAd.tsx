import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'
import AdMobile from '../Components/AdMobile'
import thinkingGirl from '../assets/images/SingleAd_girl.png'

type Props = {}

const SingleAd = (props: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/auth-required')
  }
  return (
    <div
      area-label='page-singleAd'
      className='pt-[120px] md:pt-0 sm:h-[100%] relative flex justify-center items-center text-Black '
    >
      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden lg:block lg:w-[332px] lg:h-[332px] lg:absolute lg:top-[50%] lg:left-[-250px] lg:translate-y-[-50%]  lg:rounded-full lg:bg-lightGreen xl:h-[380px] xl:w-[380px]'
      />
      <div
        area-label='line'
        className='hidden lg:block lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:left-0 lg:border-b-2 lg:border-lightGreen w-screen'
      />
      {/* Circle and line in background - END */}

      {/* Main part of single ad */}
      <div area-label='main' className='w-full  sm:w-[80%]  sm:h-[95vh] h-full flex flex-col lg:justify-center lg:w-[50%]  justify-end'>
        {/* Browse Job button */}
        <div
          area-label='back-button-to-jobs'
          className='hidden lg:flex lg:items-center'
        >
          <span className='flex items-center w-[24px]'>
            <div className='h-[14px] border-r-[2px] border-textBlack' />
            <IoMdArrowBack className='text-textBlack text-[20px]' />
          </span>
          <span className='text-darkGreen font-bold text-[20px] '>
            Browse Jobs
          </span>
        </div>
        {/* Browse Job button - END */}


          {/* If user exists, show ContactDetails - MOBILE */}
          <ContactDetails className='px-1 sm:px-0 w-[100%] h-[217px] flex justify-center self-center rounded-t-[65px] lg:hidden text-8xl' />

        {/* Ad */}
        <div
          area-label='ad'
          className='py-5 px-0 sm:px-9 lg:mt-5 lg:pt-12 lg:p-26 w-full sm:min-w-[270px] flex flex-col item-center z-10 sm:rounded-[21px] bg-white shadow-standard lg:min-h-[400px] mt-0'
        >
          <AdMobile />
          <div area-label='description' className='mt-3 px-5 w-full lg:p-10 sm:py-4'>
            <h3 className='text-[20px]'>Description</h3>
            <p className='mt-2  text-gray/80 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              dignissimos expedita delectus ipsa, tempore, fugiat quae inventore
              dicta nihil aut, amet officia maiores eveniet? Neque nemo
              assumenda, incidunt eaque vero error, velit in optio voluptas nam
              impedit ab nostrum qui modi sequi, cum architecto quaerat
              laboriosam perspiciatis quo distinctio ea voluptatum. Magnam hic
              inventore iusto eveniet voluptates libero nemo, commodi itaque
              enim voluptatem in. Eum in odit vel, consequuntur labore debitis
              officiis ad quia ducimus provident tenetur voluptatum laboriosam
              nulla dolorum fugit. Modi corrupti necessitatibus perspiciatis
              temporibus ipsam doloremque molestiae similique explicabo ea!
              Dignissimos ipsum atque voluptate, placeat officia ipsa.
            </p>
          </div>
        </div>
        {/* Ad - END */}

        <UniButton
          text='Contact'
          onClick={handleClick}
          className='my-7 self-center lg:mb-0'
        />

      
      </div>
      {/* Main part of single ad */}

      {/* image */}
      <img
        src={thinkingGirl}
        alt='illustration of girl in front of laptop'
        className='hidden lg:w-[230px] lg:h-[220px] lg:fixed lg:bottom-3 lg:left-[14%] lg:block lg:z-30'
      />
      {/* image - END */}
      {/* If user exists, show ContactDetails - DESKTOP */}
      <ContactDetails className='hidden lg:w-[200px] lg:h-[260px] lg:flex lg:items-center lg:absolute lg:right-0 lg:top-[50%] lg:rounded-l-[65px] lg:translate-y-[-50%] xl:w-[280px] xl:h-[350px]' />
    </div>
  )
}

export default SingleAd
