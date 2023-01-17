import React from 'react'
import { GoSearch } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import useSearch from '../Hooks/useSearch'

type Props = {
  // searchInput: string
  // setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const Search = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)    
  }

  const { searchWord, setSearchWord, searchCategory, setSearchCategory } =
  useSearch()

  const handleClick = (e: React.FormEvent) => {
    setSearchWord('')
  }

  return (
    <div 
    aria-label='search-home'
    className='flex items-center justify-center w-[20rem]
     sm:w-full
    lg:w-full
     '>

      <label className='relative  w-full  '>
        <GoSearch className='w-[20px] absolute top-4 left-4 text-gray text-opacity-50' />
        <IoMdClose
        className='absolute top-3 right-4 text-gray text-opacity-30 cursor-pointer hover:text-gray' size={24}
        onClick={handleClick} 
        />
        <input
          type='text'
          className='w-full items-start py-[12px] px-16
          box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
          placeholder='Search'
          value={searchWord}
          onChange={(e) => handleChange(e)}
        />
      </label>
  
    </div>
  )
}

export default Search
