import React from 'react'
import UniButton from './UniButton'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import useSearch from '../Hooks/useSearch'


  const SearchRadio = () => {
    const { searchCategory, setSearchCategory } =
    useSearch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value)
  }

 
  return (
    <div 
    area-label='search-radio'
    className='py-1 px-2 md:px-1 w-full flex flex-row justify-between items-center rounded-full border-darkBeige border-2 md:gap-10 xl:gap-5
    mt-2 md:pl-4 md:p
    '>
      <div
        className='flex justify-center items-center gap-2'
        aria-label='radio'>
      <div>
        <input
          className='mr-1 accent-darkGreen '
          type='radio'
          id='all'
          name='category'
          value='all' 
          onChange={handleChange}
          checked={searchCategory == 'all'}
        />
        <label 
        className=' text-gray' 
        htmlFor='all'>all
        </label>
      </div>
      <div >
        <input
          className='mr-1 accent-darkGreen'
          type='radio'
          id='offering'
          name='category'
          value='offering'
          checked={searchCategory == 'offering'}
          onChange={handleChange}
        />
        <label 
          className=' text-gray' 
          htmlFor='offering'>offering</label>
      </div>
      <div>
        <input
          className='mr-2 accent-darkGreen'
          type='radio'
          id='searching'
          name='category'
          value='searching'
          checked={searchCategory== 'searching'}
          onChange={handleChange}
        />
        <label 
          className=' text-gray' 
          htmlFor='searching'>searching</label>
      </div>
      </div>

      <div 
        aria-label='button'>
      {/* BUTTONS INSIDE OF SEARCHING/OFFERING */}
          <UniButton 
          className='hidden md:block '
          text='Browse Ads' type='button' 
          style={{width:'140px', height:'40px'}}
          />
        {/* ARROW IN MOBILE */}
        <button type='submit' className='md:hidden' >
          <BsFillArrowRightCircleFill
          size={30}
          className='relative top-1 md:hidden text-lightGreen cursor-pointer '
        />
        </button>
          
      </div>
    </div>
  )
}

export default SearchRadio
