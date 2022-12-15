import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ContactDetails from '../Components/ContactDetails'
import UniButton from '../Components/UniButton'

type Props = {}

const SingleAd = (props: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/auth-required')
  }
  return (
    <div
      area-label='page-singleAd'
      className='relative flex justify-center text-Black'
    >
      {/* Circle and line in the background */}
      <div
        area-label='circle'
        className='hidden md:block md:w-[332px] md:h-[332px] md:absolute md:top-[50%] md:left-[-250px] md:translate-y-[-50%]  md:rounded-full md:bg-lightGreen'
      />
      <div
        area-label='line'
        className='hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0 md:border-b-2 md:border-lightGreen w-screen'
      />
      {/* Circle and line in background - END */}

      {/* Main part of single ad */}
      <div area-label='main' className='w-[80%] md:w-[50%] flex flex-col'>
        {/* Browse Job button */}
        <div
          area-label='back-button-to-jobs'
          className='hidden md:flex md:items-center'
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

        {/* Ad */}
        <div
          area-label='ad'
          className='py-5 px-9 mt-8 min-w-[270px] flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard md:min-h-[400px] '
        >
          <div>JOB LABEL</div>
          <div area-label='description' className='mt-3'>
            <h3 className='text-[20px]'>Description</h3>
            <p className='mt-2 text-gray/80'>
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
          className='my-7 self-center md:mb-0'
        />

        {/* If user exists, show ContactDetails - MOBILE */}
        <ContactDetails className='w-[258px] h-[287px] self-center rounded-t-[65px] md:hidden' />
      </div>
      {/* Main part of single ad */}

      {/* image */}
      <img
        src=''
        alt=''
        className='hidden bg-red-700 md:w-[230px] md:h-[220px] md:absolute md:bottom-[-200px] md:left-[16%] md:block md:z-30'
      />
      {/* image - END */}
      {/* If user exists, show ContactDetails - DESKTOP */}
      <ContactDetails className='hidden md:w-[170px] md:h-[260px] md:flex md:items-center md:absolute md:right-0 md:top-[50%] md:rounded-l-[65px]  md:translate-y-[-50%]' />
    </div>
  )
}

export default SingleAd
