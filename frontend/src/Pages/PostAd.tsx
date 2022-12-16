import * as React from 'react'
// import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import UniButton from '../Components/UniButton'
import imagePostAd from '../assets/images/PostAd_chef.png'

type Props = {

}

const PostAd = (props: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/ad/:id')
  }
  return (
    <div
      area-label='page-postAd'
      className='relative flex justify-center text-Black'
    >
      {/* CIRCLE and LINES */}
      <div 
        area-label='circle'
        className='hidden md:block md:w-[332px] md:h-[332px] md:absolute md:top-[50%] md:left-[-250px] md:translate-y-[-50%] md:rounded-full md:bg-lightGreen'
      />
      <div 
        area-label='line'
        className='w-screen hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0 md:border-b-[3px] md:border-lightGreen'
      />

      {/* MAIN */}
      <div area-label='main' className='w-[80%] pt-[70px] md:w-[50%] flex flex-col'>

      {/* TITLE - Create your Ad - MOBILE with line*/}
        <div>
          <h1
            area-label='title-mobile'
            className='text-4xl font-medium text-textBlack md:hidden lg:hidden'><span className='italic font-medium text-lightGreen md:hidden lg:hidden'>Create </span>your Ad
          </h1>
          <div 
            area-label='line'
            className='w-[140px] absolute top-[%] left-0 border-b-[3px] border-lightGreen md:hidden lg:hidden'/>
        </div>

      {/* AD FORM */}
      <div
        area-label='ad'
        className='py-5 px-9 mt-8 min-w-[270px] flex flex-col item-center z-10 rounded-[21px] bg-white shadow-standard md:min-h-[400px] '
      >
        <form
          area-label='form'
          className='gap-6 md:flex-col lg:flex-row md:gap-10 lg:gap-20'
          onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();}}>

      {/* TITLE - Create your Ad */}
          <div
            area-label='text left'
            className='flex flex-col items-center md:items-center lg:items-center md:gap-6'
          >
            <h1
              area-label='title-md'
              className='hidden text-4xl font-medium text-textBlack md:block'><span className='italic font-medium text-lightGreen'>Create </span>your Ad</h1>
          

      {/* RADIO (offering- searching) */}
          <div
            area-label='index-radio'
            className='flex flex-row items-center gap-2'>
            <input
              type='radio'
              value='offering'
              name='case'
              className='accent-darkGreen'/>
            <label className='form-label'>offering</label>

            <input
              type='radio'
              value='searching'
              name='case'
              className='accent-darkGreen'/>
            <label className='form-label'>searching</label>
          </div>
          </div>

      {/* TITLE - CITY */}
          <div
            area-label='inputs colum'
            className="w-full mt-3 flex flex-col items-center justify-center">
          <div
            area-label='title-city'
            className='w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap gap-2 md:gap-2'>
            <div>
              <label
                htmlFor='title'
                className='form-label hidden mb-0 text-gray font-semibold lg:inline-block'>
                Title
                </label>
                <input
                  type='text'
                  name='title'
                  className='form-control block text-gray border-2 rounded-lg border-lightGray border-opacity-50 placeholder:text-sm placeholder:px-3
                  focus:outline-lightGray lg:placeholder-transparent'
                  placeholder='Title'/>
            </div>
            <div>
              <label
                area-label='city'
                htmlFor='city'
                className='form-label hidden mb-0 text-gray font-semibold lg:inline-block'>
                City
                </label>
                <input
                  type='text'
                  name='city'
                  className='form-control block text-gray rounded-lg border-2 border-lightGray border-opacity-50 placeholder:text-sm placeholder:px-3 focus:outline-lightGray lg:placeholder-transparent' placeholder='City'/>
            </div>
            </div>

      {/* TEXTAREA */}
            <textarea
              area-label='text area'
              name='text'
              id='text'
              className='h-[170px] w-full mt-3 mb-3 rounded-xl resize-none caret-gray border-2 border-lightGray border-opacity-50 focus:outline-none placeholder:text-sm placeholder:text-lightGray placeholder:px-3 placeholder:py-3 lg:w-full lg:px-3 lg:py-2 lg:mb-0 lg:rounded-3xl lg:placeholder:text-base'
              placeholder='description..'>
            </textarea>

      {/* CHECKBOX (email-phone) */}
            <div
              area-label='form-bottom'
              className='w-full mb-2 flex flex-col-reverse justify-center gap-2 lg:flex-row lg:justify-between lg:gap-2 lg:mt-6'>
                
              <div
                area-label='checkbox-text '
                className='mb-3 flex flex-col justify-center gap-1 lg:flex-row'>
                <p className='text-lightGray'>How to reach you:</p>

                <div
                  area-label='email-phone'
                  className='flex flex-row gap-3'>
                <div
                  area-label='email'
                  className='flex flex-row gap-2'>
                <input
                  type='checkbox'
                  value='email'
                  name='contact'
                  checked={true}
                  className='accent-darkGreen form-checkbox'/>
                <label>Email</label>
                </div>
                <div
                  area-label='phone'
                  className='flex flex-row gap-2'>
                <input
                  type='checkbox'
                  value='phone'
                  name='contact'
                  className='accent-darkGreen form-checkbox'/>
                <label>Phone</label>
                </div>

                </div>
              </div>
      {/* WAGE */}
              <div
                area-label='wage'
                className='flex flex-col justify-start gap-2 lg:flex-row lg:justify-end lg:gap-2'>
                <label className='text-lightGray'>Approx. wage per hour:</label>
                <input
                  // type='number'
                  type='text'
                  name='wage'
                  className='w-[30%] text-sm text-gray rounded-lg border-2 border-lightGray border-opacity-50 focus:outline-none placeholder:text-right placeholder:font-bold placeholder:opacity-50 placeholder:mr-1 lg:placeholder:mr-2' placeholder='$'/>
              </div>
            </div>
          </div>
        </form>
      </div>
          {/* POST AD - BUTTON */}
          <UniButton
            area-label='postAdButton'
            text='Post Ad'
            onClick={handleClick}
            className='my-7 self-center md:mb-0'
          />
      </div>

        {/* IMAGE right/botton */}
        <img
            className='w-[200] md:w-[230px] md:h-[300px] absolute bottom-[-160px] right-0 md:bottom-[-140px] lg:bottom-[-230px] md:right-[16%] md:block z-30'
            src={imagePostAd}>
        </img>
      </div>
  )
}

export default PostAd