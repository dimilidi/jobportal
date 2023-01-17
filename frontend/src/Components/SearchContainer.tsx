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
  // const [selectedCategory, setSelectedCategory] =
  //   useState<string>(searchCategory)


    // console.log('search',searchInput);
    console.log('Word',searchWord);
    // console.log('Word',selectedCategory);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // setSearchWord(searchInput)
    // setSearchCategory(selectedCategory)
    if (!path.includes('/adlist')) {
      navigate('/adslist')
    }
  }
  return props.page === 'Home' ? (
    // SEARCH HOME
    <form
      aria-label='search-home-form'
      className='sm:w-[27rem] mt-6 flex items-center justify-center flex-col
      lg:pt-[0px] lg:w-[45%] lg:self-end lg:ml-[23%]  lg:mt-[120px]
   xl:mt-0 xl:w-[50%] xl:ml-0
      xl:items-start '
      onSubmit={handleSubmit}
    >
      <div
      className='w-full  flex justify-center flex-col items-center mx-auto
      xl:w-[30rem] '
      >
        <Search 
        // searchInput={searchInput} setSearchInput={setSearchInput} 
        />
        <SearchRadio
          // selectedCategory={selectedCategory}
          // setSelectedCategory={setSelectedCategory}
        />
      </div>
    </form>

  ) : (
    
    // SEARCH ADS LIST
    <form
      onClick={handleSubmit}
      aria-label='search-ads-form'
      className='flex mt-6 w-full justify-center items-center flex-row
    '>
       <div>
        <Search 
        // searchInput={searchInput} setSearchInput={setSearchInput}
         />
        <SearchRadio
          // selectedCategory={selectedCategory}
          // setSelectedCategory={setSelectedCategory}
        />
      </div>
    </form>
  )
}

export default SearchContainer
