import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '../Components/Search'
import SearchRadio from '../Components/SearchRadio'
import useSearch from '../Hooks/useSearch'
import UniButton from './UniButton'
//icon
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

type Props = {
  page: string
}

const SearchContainer = (props: Props) => {
  const path = useLocation().pathname
  const navigate = useNavigate()
  const { searchWord, setSearchWord, searchCategory, setSearchCategory } =
    useSearch()
  const [searchInput, setSearchInput] = useState<string>(searchWord)
  const [selectedCategory, setSelectedCategory] =
    useState<string>(searchCategory)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchWord(searchInput)
    setSearchCategory(selectedCategory)
    if (!path.includes('/adlist')) {
      navigate('/adslist')
    }
  }
  return props.page === 'Home' ? (
    // SEARCH HOME
    <form
      aria-label='search-home-form'
      className='sm:w-[27rem] mt-6 flex items-center justify-center flex-col
      lg:pt-[0px] lg:self-start  lg:w-[55%]'
      // style={{ flexDirection: props.page == 'Home' ? 'column' : 'row' }}
      onSubmit={handleSubmit}
    >
      <div
      className='w-full  flex justify-center flex-col items-center
      lg:w-[80%]'
      >
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <SearchRadio
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      
      {/* BUTTON OUTSIDE OF SEARCHING/OFFERING */}
        {/* <UniButton 
        style={{width:'160px', height:'50px'}}
        className='mt-2 hidden sm:block'
        text='Browse Ads' 
        type='button'  
        />  */}

    </form>
  ) : (
    // SEARCH ADS LIST
    <form
      onClick={handleSubmit}
      aria-label='search-ads-form'
      className='flex mt-6 w-full justify-center items-center flex-row
    '>
       <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <SearchRadio
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      
      {/* <BsFillArrowRightCircleFill
        className='text-lightGreen mb-8 cursor-pointer mr-3 sm:ml-4'
        size={46} 
        onClick={handleSubmit}  
         />  */}
    </form>
  )
}

export default SearchContainer
