import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '../Components/Search'
import SearchRadio from '../Components/SearchRadio'
import SearchRadioAdsList from './SearchRadioAdsList'


type Props = {
  page: string
}

const SearchContainer = (props: Props) => {
  const path = useLocation().pathname
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!path.includes('/adslist')) {
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
      className='w-full flex justify-center flex-col items-center mx-auto
      xl:w-[30rem] '
      >
        <Search />
        <SearchRadio />
      </div>
    </form>

  ) : (
    
    // SEARCH ADS LIST
    <form
      onClick={handleSubmit}
      aria-label='search-ads-form'
      className='w-full mt-2 md:mt-8
        flex justify-center items-center flex-row
        md:w-[100%] lg:w-[99%] xl:w-[97%] 2xl:w-[71%] 
    '>
       <div className='lg:mt-[40px] lg:ml-[30px] flex flex-col lg:flex-row gap-3 2xl:gap-9'>
        <Search />
        <SearchRadioAdsList />
      </div>
    </form>
  )
}

export default SearchContainer
