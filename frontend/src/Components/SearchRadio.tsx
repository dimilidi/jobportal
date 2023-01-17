import React, { useEffect, useState } from 'react'
import UniButton from './UniButton'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import useSearch from '../Hooks/useSearch'


type Props = {
  // selectedCategory: string
  // setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const SearchRadio = (props: Props) => {

  const { searchWord, setSearchWord, searchCategory, setSearchCategory } =
  useSearch()


  // console.log(props.selectedCategory);
  

 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value)

  }

 

  return (
    <div 
    area-label='search-radio'
    className='p-4 flex justify-center items-center gap-3  rounded-full border-darkBeige border-2 
    py-2 mt-2
    md:pl-4 md:p 
    lg:w-[100%] lg:max-w-full lg:items-baseline lg:py-1
    '>
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
          className='mr-1 accent-darkGreen'
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

      {/* BUTTONS INSIDE OF SEARCHING/OFFERING */}
          <UniButton 
          className='hidden md:block '
          text='Browse Ads' type='button' 
          style={{width:'140px', height:'40px'}}
          />
        {/* ARROW IN MOBILE */}
          <BsFillArrowRightCircleFill
          size={28}
          className=' md:hidden  ml-2  text-lightGreen cursor-pointer '
          />
    </div>
  )
}

export default SearchRadio
