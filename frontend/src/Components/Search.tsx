import React from 'react'
import { GoSearch } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

type Props = {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const Search = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchInput(e.target.value)
  }

  const handleClick = (e: React.FormEvent) => {
    props.setSearchInput('')
  }

  return (
    <div
      aria-label='search-home'
      className='w-[90%] flex items-center justify-center
    sm:w-[400px]
    lg:w-[450px] 
    xl: ml-4 '
    >
      <label className='relative  w-full '>
        <GoSearch className='w-[20px] absolute top-4 left-5 text-gray text-opacity-50' />
        <input
          type='text'
          className='w-full items-start py-[12px] px-16
          box-border placeholder:text-center rounded-full bg-darkBeige shadow-inner placeholder:text-gray placeholder:text-opacity-50 focus:outline-lightGray  '
          placeholder='Search'
          value={props.searchInput}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div>
        <IoMdClose onClick={handleClick} />
      </div>
    </div>
  )
}

export default Search
