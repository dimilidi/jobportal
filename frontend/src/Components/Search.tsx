import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import useAds from '../Hooks/useAds'
import useSearch from '../Hooks/useSearch'

type Props = {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const Search = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(e.target.value)
  }

  return (
    <div className='w-full flex items-center justify-center '>
      <label className='relative  w-[90%] sm:w-[80%] xl:w-[60%] '>
        <GoSearch className='w-[20px] absolute top-4 left-5 text-gray text-opacity-50' />
        <input
          type='text'
          className='w-full py-[12px] px-12 box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
          placeholder='Search'
          value={props.searchInput}
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
  )
}

export default Search
