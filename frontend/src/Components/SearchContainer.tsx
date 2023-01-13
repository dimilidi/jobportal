import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../Components/Search'
import SearchRadio from '../Components/SearchRadio'
import useSearch from '../Hooks/useSearch'
import UniButton from './UniButton'
//icon
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

type Props = {
  page: string
}

const SearchContainer = (props: Props) => {
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
    navigate('/adslist')
  }
  return (
    props.page ==='Home' ?

    // SEARCH HOME
    <form
      aria-label='search-home-form'
      className='mt-6 flex items-center justify-center gap-3 
      sm:w-[90%] w-full
      lg:pt-[0px] lg:self-start  lg:w-[50%]'
      style={{ flexDirection: props.page == 'Home' ? 'column' : 'row' }}
      onSubmit={handleSubmit}
    >
      <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <SearchRadio
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
        <UniButton text='Browse Ads' type='button'  /> 
    </form>
    :

    // SEARCH ADS LIST 
    <form 
      aria-label='search-ads-form'
      className='flex mt-6 w-full justify-center items-center
    '>
       <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <SearchRadio 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <BsFillArrowRightCircleFill 
        onClick={handleSubmit} 
        size={46} 
        className='text-lightGreen mb-8 cursor-pointer mr-3 sm:ml-4
         ' /> 

    </form>
  )

}

export default SearchContainer
