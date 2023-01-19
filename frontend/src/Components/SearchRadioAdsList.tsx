import React, { useEffect, useState } from 'react'
import UniButton from './UniButton'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import useSearch from '../Hooks/useSearch'


  const SearchRadioAdsList = () => {
    const { searchCategory, setSearchCategory } =
    useSearch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value)
  }

 
  return (
    <div 
    area-label='search-radio'
    className='p-2 flex flex-row justify-between items-center rounded-full border-darkBeige border-2
    py-2
    md:pl-4 
    lg:w-[100%] lg:max-w-full lg:items-center lg:py-1
    '>
      <div
        className='flex justify-center items-center gap-2'
        aria-label='radio'>
      <div>
        <input
          className='mr-2 accent-darkGreen '
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
          className='mr-2 accent-darkGreen'
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
            <BsFillArrowRightCircleFill 
            size={28}
            className=' text-lightGreen cursor-pointer '
            type='button'
            />
      </div>
    </div>
  )
}

export default SearchRadioAdsList
