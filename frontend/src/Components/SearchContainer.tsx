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
      className='sm:w-[27rem] flex items-center justify-center flex-col
      lg:pt-[0px] lg:w-[45%] lg:self-end lg:ml-[23%] lg:mt-[120px]
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
      onSubmit={handleSubmit}
      aria-label='search-ads-form'
      className='w-full mt-8 lg:mt-[60px]
        flex justify-center items-center flex-row 
    '>
       <div className='flex flex-col justify-center lg:flex-row gap-3 xl:w-[39rem] xl:ml-[-40px] 2xl:w-[39.5rem]'>
        <Search />
        <SearchRadioAdsList />
      </div>
    </form>
  )
}

export default SearchContainer
